import React, { useEffect, useState } from 'react'
import * as s from './style'

import { X } from '@phosphor-icons/react'
import { toast } from 'react-toastify'
import api from '../../../../services/api'

const Parts = () => {
  const [selecao, setSelecao] = useState('')
  const [data, setData] = useState([])
  const [info, setInfo] = useState({})
  const [form, setForm] = useState({
    prefix: '',
    model: '',
  })

  // Função para lidar com a mudança de seleção
  const handleSelectChange = (event) => {
    setSelecao(event.target.value)
  }

  useEffect(() => {
    api.get('/model-parts').then(({ data: { info } }) => {
      setData(info)
    })
  }, [])

  const handleRefreshData = () => {
    api.get('/model-parts').then(({ data: { info } }) => {
      setData(info)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    api
      .post('/model/save', form)
      .then(({ data: { message, statusCode } }) => {
        if (statusCode === 200) {
          handleRefreshData()
          toast.success(message)
        } else {
          toast.error(message)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const handleDeleteParts = (prefix) => {
    api
      .delete(`/delete-model/?prefix=${prefix}`)
      .then(({ data: { message } }) => {
        toast.success(message)
        handleRefreshData()
      })
      .catch((err) => {
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
