import React, { useEffect, useState } from 'react'
import * as s from './style'

import { X } from '@phosphor-icons/react'
import { toast } from 'react-toastify'
import api from '../../../../services/api'

const Parts = () => {
  const [selecao, setSelecao] = useState('')
  const [data, setData] = useState([])
  const [form, setForm] = useState({
    prefix: '',
    model: '',
  })

  // Função para lidar com a mudança de seleção
  const handleSelectChange = (event) => {
    setSelecao(event.target.value)
  }

  // Efeito colateral que é executado após a montagem do componente para obter dados iniciais
  useEffect(() => {
    api.get('/model-parts').then(({ data: { info } }) => {
      // Atualiza o estado 'data' com os dados obtidos da API
      setData(info)
    })
  }, [])

  // Função para atualizar os dados chamando a API novamente
  const handleRefreshData = () => {
    api.get('/model-parts').then(({ data: { info } }) => {
      // Atualiza o estado 'data' com os dados obtidos da API
      setData(info)
    })
  }

  // Função chamada quando o formulário é enviado para salvar um modelo
  const handleSubmit = (e) => {
    e.preventDefault()

    // Chama a API para salvar o modelo com base nos dados do formulário
    api
      .post('/model/save', form)
      .then(({ data: { message, statusCode } }) => {
        // Verifica o status da resposta da API
        if (statusCode === 200) {
          // Se a operação for bem-sucedida, atualiza os dados e o estado do formulário
          handleRefreshData()
          setForm({
            prefix: '',
            model: '',
          })
          // Exibe uma mensagem de sucesso
          toast.success(message)
        } else {
          // Se houver um erro, exibe uma mensagem de erro
          toast.error(message)
        }
      })
      .catch((err) => {
        // Em caso de erro, exibe o erro no console
        console.error(err)
      })
  }

  // Função para excluir partes de um modelo com base no prefixo
  const handleDeleteParts = (prefix) => {
    // Chama a API para excluir partes de um modelo com base no prefixo fornecido
    api
      .delete(`/delete-model/?prefix=${prefix}`)
      .then(({ data: { message } }) => {
        // Se a operação for bem-sucedida, atualiza os dados
        toast.success(message)
        handleRefreshData()
      })
      .catch((err) => {
        // Em caso de erro, exibe o erro no console
        console.error(err)
      })
  }

  return (
    <s.Container>
      <s.Card>
        <form onSubmit={(e) => handleSubmit(e)} method="post">
          <s.Content>
            <s.Row>
              <s.FormControl>
                <label htmlFor="prefix">Prefixo</label>
                <input
                  type="text"
                  name="prefix"
                  id="prefix"
                  onChange={(e) =>
                    setForm((prevData) => ({
                      ...prevData,
                      prefix: e.target.value,
                    }))
                  }
                  value={form.prefix || ''}
                  required
                  maxLength={2}
                />
              </s.FormControl>
              <s.FormControl className="auto">
                <label htmlFor="model">Modelo</label>
                <input
                  type="text"
                  name="model"
                  id="model"
                  onChange={(e) =>
                    setForm((prevData) => ({
                      ...prevData,
                      model: e.target.value,
                    }))
                  }
                  value={form.model || ''}
                  required
                />
              </s.FormControl>
            </s.Row>

            <s.Action>
              <button type="submit">Cadastro</button>
            </s.Action>
          </s.Content>
        </form>

        <s.Parts>
          <table>
            <thead>
              <tr>
                <th>Prefixo</th>
                <th>Modelo</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="key">{item.prefix}</td>
                  <td>{item.model}</td>
                  <td>
                    <X
                      size={32}
                      color="#f93465"
                      cursor="pointer"
                      weight="bold"
                      onClick={() => handleDeleteParts(item.prefix)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </s.Parts>
      </s.Card>
    </s.Container>
  )
}

export default Parts
