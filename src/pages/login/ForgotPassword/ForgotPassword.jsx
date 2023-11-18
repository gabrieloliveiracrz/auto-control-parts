import { IdentificationCard } from '@phosphor-icons/react'
import React from 'react'
import Back from '../../../components/Back/Back'
import Confirm from '../../../components/Confirm/Confirm'
import * as s from '../style'
import api from '../../../services/api'
import { toast } from 'react-toastify'

const ForgotPassword = () => {
  // Componente de função para lidar com a solicitação de redefinição de senha
  const onSubmit = (e) => {
    e.preventDefault()
    // Obtém o código inserido no campo de entrada do formulário
    const code = e.target[0].value

    // Chama a API para solicitar a redefinição de senha com o código fornecido
    api
      .get(`/users/forgot-password/?code=${code}`)
      .then((response) => {
        // Se a solicitação for bem-sucedida, exibe uma mensagem de sucesso e instruções adicionais
        console.log(response)
        toast.success('Verifique seu telegram para continuar o processo!')
      })
      .catch((err) => {
        // Se houver um erro na solicitação, exibe uma mensagem de erro
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
