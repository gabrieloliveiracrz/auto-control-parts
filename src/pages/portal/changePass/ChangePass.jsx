import { Eye, EyeSlash, WarningCircle } from '@phosphor-icons/react'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import api from '../../../services/api'
import * as s from './style'

const ChangePass = ({ user: { code } }) => {
  const [form, setForm] = useState('')
  const [difPass, setDifPass] = useState(false)
  const [iconPass, setIconPass] = useState(true)
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [type, setType] = useState('password')
  const [isValidLen, setIsValidLen] = useState(false)
  const [hasUppercase, setHasUppercase] = useState(false)
  const [hasDigit, setHasDigit] = useState(false)
  const [hasSpecialChar, setHasSpecialChar] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [capsActiveField, setCapsActiveField] = useState(null)

  useEffect(() => {
    console.log(isPasswordValid, difPass)
  }, [])

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)

    const isValidPasswordLen =
      newPassword.length <= 32 && newPassword.length >= 8
    const hasUppercase = /[A-Z]/.test(newPassword)
    const hasDigit = /\d/.test(newPassword)
    const hasSpecialChar = /[!@#$%^&*]/.test(newPassword)

    setIsValidLen(isValidPasswordLen)
    setHasUppercase(hasUppercase)
    setHasDigit(hasDigit)
    setHasSpecialChar(hasSpecialChar)

    const isPasswordValid =
      isValidPasswordLen && hasUppercase && hasDigit && hasSpecialChar
    setIsPasswordValid(isPasswordValid)
  }

  const isFormFilled = password.trim() !== ''

  const verifyEqualPassword = (e) => {
    setConfirmPass(e.target.value)
    if (password === e.target.value) {
      setDifPass(false)
    } else {
      setDifPass(true)
    }
  }

  const changeEyePass = (e) => {
    if (iconPass === true) {
      setIconPass(false)
      setType('text')
    } else {
      setIconPass(true)
      setType('password')
    }
  }

  const capsLock = (e, fieldName) => {
    if (e.getModifierState('CapsLock')) {
      setCapsActiveField(fieldName)
    } else if (capsActiveField === fieldName) {
      setCapsActiveField(null)
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const info = {
      password,
      code,
    }

    api
      .put(`/users/change-password`, info)
      .then(() => {
        toast.success('Senha alterada com sucesso!')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <s.Container>
      <s.Card>
        <s.Title>Alterar senha</s.Title>
        <form method="post">
          <s.Column>
            <s.FormControl>
              <s.IconWithInput className="IconWithInput">
                <input
                  type={type}
                  className="password"
                  name="password"
                  placeholder="Senha"
                  onChange={(e) => setForm(e.target.value)}
                  onInput={(e) => handlePasswordChange(e)}
                  onKeyDown={(e) => capsLock(e, 'pass')}
                  required
                ></input>
                {iconPass === true ? (
                  <Eye
                    size={30}
                    className="icon eye"
                    onClick={(e) => changeEyePass(e)}
                  />
                ) : (
                  <EyeSlash
                    size={30}
                    className="icon eye"
                    onClick={(e) => changeEyePass(e)}
                  />
                )}
              </s.IconWithInput>
              {capsActiveField === 'pass' && (
                <s.WarningSpan>
                  <WarningCircle size={30} />
                  CapsLock Ativado!
                </s.WarningSpan>
              )}
              {isFormFilled && !isValidLen && (
                <s.WarningSpan>
                  <WarningCircle size={30} className="warning" />
                  <span>A senha deve ter entre 8 e 32 caracteres.</span>
                </s.WarningSpan>
              )}
              {isFormFilled && !hasUppercase && (
                <s.WarningSpan>
                  <WarningCircle size={30} className="warning" />
                  <span>
                    A senha deve conter pelo menos uma letra maiúscula.
                  </span>
                </s.WarningSpan>
              )}
              {isFormFilled && !hasDigit && (
                <s.WarningSpan>
                  <WarningCircle size={30} className="warning" />
                  <span>A senha deve conter pelo menos um dígito.</span>
                </s.WarningSpan>
              )}
              {isFormFilled && !hasSpecialChar && (
                <s.WarningSpan>
                  <WarningCircle size={30} className="warning" />
                  <span>
                    A senha deve conter pelo menos um caractere especial.
                  </span>
                </s.WarningSpan>
              )}
            </s.FormControl>

            <s.FormControl>
              <s.IconWithInput className="IconWithInput">
                <input
                  type={type}
                  className="confirmPass"
                  name="confirmPass"
                  placeholder="Confirmar senha"
                  onInput={(e) => verifyEqualPassword(e)}
                  onKeyDown={(e) => capsLock(e, 'conf')}
                  required
                ></input>
              </s.IconWithInput>
              {capsActiveField === 'conf' && (
                <s.WarningSpan>
                  <WarningCircle size={30} />
                  CapsLock Ativado!
                </s.WarningSpan>
              )}
              {difPass ? (
                <s.WarningSpan>
                  <WarningCircle size={30} className="warning" />
                  <span>Senha Diferente!</span>
                </s.WarningSpan>
              ) : null}
            </s.FormControl>
          </s.Column>

          <s.Action>
            <button
              disabled={
                !isPasswordValid ||
                difPass ||
                password.trim() === '' ||
                confirmPass.trim() === ''
              }
              onClick={(e) => handleOnSubmit(e)}
            >
              Alterar
            </button>
          </s.Action>
        </form>
      </s.Card>
    </s.Container>
  )
}

export default ChangePass
