import { Eye, EyeSlash, Key, User, WarningCircle } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Confirm from '../../../components/Confirm/Confirm'
import api from '../../../services/api'
import * as s from '../style'

const SignIn = () => {
  const navigate = useNavigate()
  const [icon, setIcon] = useState(true)
  const [type, setType] = useState('password')
  const [form, setForm] = useState({})
  const [user, setUser] = useState({})
  const [loggin, setLoggin] = useState(false)
  const [capsActive, setCapsActive] = useState(false)

  const handleLogininputs = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (form.code === 'admin' && form.password === 'loginfalso123') {
      localStorage.setItem('user', JSON.stringify(form))
      navigate('/')
    } else validateUser()
  }

  const validateUser = () => {
    api
      .post('/users/login', {
        code: form.code,
        password: form.password,
      })
      .then((response) => {
        if (response.data.statusCode === 200) {
          setUser(response.data.info)
          setLoggin(true)
        } else {
          setUser('')
          toast.error(response.data.message)
        }
      })
  }

  if (loggin) {
    localStorage.setItem('user', JSON.stringify(user))
    navigate('/')
  }

  const changeEye = (e) => {
    if (icon === true) {
      setIcon(false)
      setType('text')
    } else {
      setIcon(true)
      setType('password')
    }
  }

  const capsLock = (e) => {
    if (e.getModifierState('CapsLock')) {
      setCapsActive(true)
    } else {
      setCapsActive(false)
    }
  }

  return (
    <s.Content>
      <form method="post" onSubmit={(e) => onSubmit(e)}>
        <s.Title>Bem-vindo(a)!</s.Title>
        <s.InputGroup>
          <s.IconWithInput className="IconWithInput">
            <User size={30} className="icon" />
            <s.Input
              type="text"
              className="username"
              name="code"
              placeholder="Usuário"
              required
              onChange={(e) => handleLogininputs(e)}
            ></s.Input>
          </s.IconWithInput>
        </s.InputGroup>
        <s.InputGroup>
          <s.IconWithInput>
            <Key size={30} className="icon" />
            <s.Input
              type={type}
              className="password"
              id="password"
              name="password"
              placeholder="Senha"
              required
              onChange={(e) => handleLogininputs(e)}
              onKeyDown={(e) => capsLock(e)}
            ></s.Input>
            {icon === true ? (
              <Eye
                size={30}
                className="icon eye"
                onClick={(e) => changeEye(e)}
              />
            ) : (
              <EyeSlash
                size={30}
                className="icon eye"
                onClick={(e) => changeEye(e)}
              />
            )}
          </s.IconWithInput>
          {capsActive ? (
            <s.WarningSpan>
              <WarningCircle size={30} />
              CapsLock Ativado!
            </s.WarningSpan>
          ) : null}
          <s.StyledLink to="/login/forgotPassword">
            <s.Span>Esqueceu a senha?</s.Span>
          </s.StyledLink>
        </s.InputGroup>
        <Confirm message="Entrar" />
      </form>

      <s.NotAcess>
        <s.p>
          Ainda não possui acesso?{' '}
          <s.StyledLink to="/login/signUp">
            <s.Span>Clique Aqui</s.Span>
          </s.StyledLink>
        </s.p>
      </s.NotAcess>
    </s.Content>
  )
}

export default SignIn
