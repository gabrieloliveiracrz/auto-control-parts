import React, { useEffect, useState } from 'react'
import * as s from './style'

import { toast } from 'react-toastify'
import api from '../../../../services/api'

const User = () => {
  const [data, setData] = useState([])
  const [form, setForm] = useState({
    code: '',
    name: '',
    permission: '',
  })

  // Efeito colateral que é executado após a montagem do componente para obter dados iniciais dos usuários
  useEffect(() => {
    // Chama a API para obter dados iniciais dos usuários
    api.get('/users').then(({ data: { info } }) => {
      // Atualiza o estado 'data' com os dados obtidos da API
      setData(info)
    })
  }, [])

  // Função para atualizar os dados dos usuários chamando a API novamente
  const handleRefreshData = () => {
    // Chama a API para obter dados atualizados dos usuários
    api.get('/users').then(({ data: { info } }) => {
      // Atualiza o estado 'data' com os dados obtidos da API
      setData(info)
    })
  }

  // Função para encontrar informações de um usuário com base no código
  const handleFindUserInfo = (code) => {
    // Chama a API para obter informações de um usuário com base no código fornecido
    api
      .get(`/users?code=${code}`)
      .then(({ data: { info } }) => {
        // Exibe as informações no console (pode ser removido em produção)
        console.log(info)
        // Atualiza o estado do formulário com as informações do usuário encontrado
        setForm(info)
      })
      .catch((err) => {
        // Em caso de erro, exibe o erro no console
        console.error(err)
      })
  }

  // Função chamada quando o formulário é enviado para atualizar as permissões do usuário
  const handleSubmit = (e) => {
    e.preventDefault()

    // Chama a API para atualizar as permissões do usuário com base nos dados do formulário
    api
      .put('/users/permission', form)
      .then(({ data: { message, statusCode } }) => {
        // Verifica o status da resposta da API
        if (statusCode === 200) {
          // Se a operação for bem-sucedida, exibe uma mensagem de sucesso
          toast.success(message)
          // Atualiza os dados dos usuários
          handleRefreshData()
          // Reseta o estado do formulário para valores padrão
          setForm({
            code: '',
            name: '',
            permission: 'Aguardando',
          })
        } else {
          // Se houver um erro, exibe uma mensagem de aviso
          toast.warning(message)
        }
      })
      .catch((err) => {
        // Em caso de erro, exibe o erro no console
        console.error(err)
      })
  }

  return (
    <s.Container>
      <s.Card>
        <form onSubmit={(e) => handleSubmit(e)} method="put">
          <s.Content>
            <s.Row>
              <s.FormControl>
                <label htmlFor="code">Matrícula</label>
                <input
                  type="text"
                  name="cod"
                  id="code"
                  value={form.code || ''}
                  readOnly
                />
              </s.FormControl>
              <s.FormControl>
                <label htmlFor="username">Nome</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={form.name || ''}
                  readOnly
                />
              </s.FormControl>
              <s.FormControl className="auto">
                <label htmlFor="office">Selecione uma opção:</label>
                <select
                  id="office"
                  name="office"
                  onChange={(e) =>
                    setForm((prevData) => ({
                      ...prevData,
                      permission: e.target.value,
                    }))
                  }
                  value={form.permission || ''}
                >
                  <option value="Aguardando" disabled>
                    Selecione uma opção...
                  </option>
                  <option value="Inspetor">Inspetor</option>
                  <option value="Supervisor">Supervisor</option>
                </select>
              </s.FormControl>
            </s.Row>

            <s.Action>
              <button>Confirmar</button>
            </s.Action>
          </s.Content>
        </form>

        <s.Parts>
          <table>
            <thead>
              <tr>
                <th>Matrícula</th>
                <th>Nome</th>
                <th>Permissão</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td
                    className="key"
                    onClick={() => handleFindUserInfo(item.code)}
                  >
                    {item.code}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.permission}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </s.Parts>
      </s.Card>
    </s.Container>
  )
}

export default User
