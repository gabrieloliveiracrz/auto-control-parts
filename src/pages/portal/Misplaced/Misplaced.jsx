import React, { useEffect, useState } from 'react'
import * as s from './style'

import { Check, X } from '@phosphor-icons/react'
import { toast } from 'react-toastify'
import api from '../../../services/api'

const Misplaced = () => {
  const [data, setData] = useState([])
  const [form, setForm] = useState({
    serial_number: '',
    status: '',
  })
  const [model, setModel] = useState()
  const [disapproved, setDisapproved] = useState({
    serial_number: '',
    action: '',
  })

  // Efeito colateral que é executado após a montagem do componente para obter dados iniciais
  useEffect(() => {
    api.get('/parts/misplaced').then(({ data: { info } }) => {
      // Atualiza o estado 'data' com os dados obtidos da API
      setData(info)
    })
  }, [])

  // Função para atualizar os dados chamando a API novamente
  const handleRefreshData = () => {
    api.get('/parts/misplaced').then(({ data: { info } }) => {
      // Atualiza o estado 'data' com os dados obtidos da API
      setData(info)
    })
  }

  // Função para aprovar peças extraviadas
  const handleApproveParts = (serialNumber, situation, action) => {
    const approvedData = {
      serial_number: serialNumber,
      model,
      situation,
      action,
    }
    // Chama a API para excluir partes de um modelo com base no prefixo fornecido
    if (model !== '') {
      api
        .post(`/parts/misplaced/action`, approvedData)
        .then(({ data: { message } }) => {
          // Se a operação for bem-sucedida, atualiza os dados
          toast.success(message)
          handleRefreshData()
        })
        .catch((err) => {
          // Em caso de erro, exibe o erro no console
          console.error(err)
        })
    } else {
      toast.error('Por favor, inserir um nome para o modelo!')
    }
  }

  // Função para excluir partes de um modelo com base no prefixo
  const handleDeleteParts = (serialNumber, action) => {
    const disapprovedData = {
      serial_number: serialNumber,
      action,
    }

    // Chama a API para excluir partes de um modelo com base no prefixo fornecido
    api
      .post(`/parts/misplaced/action`, disapprovedData)
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
        <s.Title>
          <h3>Peças extraviadas</h3>
        </s.Title>

        <s.Report>
          <s.Misplaced>
            {data && data.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Serie</th>
                    <th>Nome do Modelo</th>
                    <th>Status</th>
                    <th colSpan={2}>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.serial_number}</td>
                      <td>
                        <s.FormControl>
                          <input
                            type="text"
                            onChange={(e) => setModel(e.target.value)}
                          />
                        </s.FormControl>
                      </td>
                      <td>{item.status}</td>
                      {model && model !== '' && (
                        <td>
                          <Check
                            size={32}
                            color="#3EC940"
                            cursor="pointer"
                            weight="bold"
                            onClick={() =>
                              handleApproveParts(
                                item.serial_number,
                                item.status,
                                'approved',
                              )
                            }
                          />
                        </td>
                      )}
                      <td>
                        <X
                          size={32}
                          color="#f93465"
                          cursor="pointer"
                          weight="bold"
                          onClick={() =>
                            handleDeleteParts(item.serial_number, 'disapproved')
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <span>Sem registros no momento!</span>
            )}
          </s.Misplaced>
        </s.Report>
      </s.Card>
    </s.Container>
  )
}

export default Misplaced
