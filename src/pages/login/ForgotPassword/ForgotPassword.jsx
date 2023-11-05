import { IdentificationCard } from '@phosphor-icons/react'
import React from 'react'
import Back from '../../../components/Back/Back'
import Confirm from '../../../components/Confirm/Confirm'
import * as s from '../style'
import api from '../../../services/api'
import { toast } from 'react-toastify'

const ForgotPassword = () => {
  const onSubmit = (e) => {
    e.preventDefault()
    const code = e.target[0].value
    api
      .get(`/users/forgot-password/?code=${code}`)
      .then((response) => {
        console.log(response)
        toast.success('Verifique seu telegram para continuar o processo!')
      })
      .catch((err) => {
        console.error(err)
        toast.error('Matrícula não encontrada!')
      })
  }

  return (
    <div>
      <s.Container>
        <form method="get" onSubmit={(e) => onSubmit(e)}>
          <s.Content>
            <s.Title>Esqueci a senha</s.Title>
            <s.InputGroup>
              <s.IconWithInput className="iconWithInput">
                <IdentificationCard size={30} className="icon" weight="bold" />
                <s.Input
                  type="text"
                  className="code"
                  name="code"
                  placeholder="Matrícula"
                ></s.Input>
              </s.IconWithInput>
            </s.InputGroup>
            <s.ButtonGroup>
              <Confirm message="Enviar" />
              <Back redirect="/login/signIn" message="Voltar" />
            </s.ButtonGroup>
          </s.Content>
        </form>
      </s.Container>
    </div>
  )
}

export default ForgotPassword
