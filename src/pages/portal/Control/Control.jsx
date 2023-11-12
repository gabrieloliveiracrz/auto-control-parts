import React, { useEffect, useState } from 'react'
import * as s from './style'
import api from '../../../services/api'
import { toast } from 'react-toastify'

const Control = ({ user }) => {
  const [data, setData] = useState([])
  const [form, setForm] = useState({
    serie: '',
    model: '',
    situation: '',
    date: '',
    codeInspector: null,
    inspector: null,
    codeSupervisor: null,
    supervisor: null,
    finalCheck: null,
  })

  // Busca todos os registros já cadastrados
  useEffect(() => {
    api
      .get(`/parts?role=${user.role}`)
      .then(({ data: { info } }) => {
        setData(info)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const handleRefreshData = () => {
    api.get(`/parts?role=${user.role}`).then(({ data: { info } }) => {
      setData(info)
    })
  }

  // Busca as informações do processo buscado
  const handleFindProcessInfo = (serie) => {
    api
      .get(`/parts?serial_number=${serie}`)
      .then(({ data: { info } }) => {
        console.log(info)
        setForm({
          serie: info.serie,
          model: info.model,
          situation: info.situation,
          date: info.date,
          codeInspector:
            info.codeInspector === null && user.role === 'Inspetor'
              ? user.code
              : info.codeInspector,
          inspector:
            info.inspector === null && user.role === 'Inspetor'
              ? user.name
              : info.inspector,
          codeSupervisor:
            info.codeSupervisor === null && user.role === 'Supervisor'
              ? user.code
              : info.codeSupervisor,
          supervisor:
            info.supervisor === null && user.role === 'Supervisor'
              ? user.name
              : info.supervisor,
          finalCheck: info.finalCheck,
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    api
      .put('/parts/validate', {
        serie: form.serie,
        model: form.model,
        situation: form.situation,
        date: form.date,
        codeInspector: form.codeInspector,
        inspector: form.inspector,
        codeSupervisor: form.codeSupervisor,
        supervisor: form.supervisor,
        finalCheck: form.finalCheck,
      })
      .then(({ data: { message } }) => {
        toast.success(message)
        setForm({
          serie: '',
          model: '',
          situation: '',
          date: '',
          codeInspector: null,
          inspector: null,
          codeSupervisor: null,
          supervisor: null,
          finalCheck: null,
        })
        handleRefreshData()
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <s.Container>
      <s.Card>
        <s.Title>
          <h3>Selecione uma das peças e faça a análise necessária</h3>
        </s.Title>
        <form method="post" onSubmit={(e) => handleSubmit(e)}>
          <s.Content>
            <s.Row>
              <s.FormControl>
                <label htmlFor="date">Data de Inspeção</label>
                <input
                  type="text"
                  name="date"
                  id="date"
                  value={form.date || ''}
                  readOnly
                />
              </s.FormControl>
              <s.FormControl>
                <label htmlFor="serie">N° Serie</label>
                <input
                  type="text"
                  name="serie"
                  id="serie"
                  value={form.serie || ''}
                  readOnly
                />
              </s.FormControl>
              <s.FormControl className="auto">
                <label htmlFor="model">Modelo</label>
                <input
                  type="text"
                  name="model"
                  id="model"
                  value={form.model || ''}
                  readOnly
                />
              </s.FormControl>
            </s.Row>
            <s.Row>
              <s.FormControl>
                <label htmlFor="codeInspector">Matricula Inspetor</label>
                <input
                  type="text"
                  name="codeInspector"
                  id="codeInspector"
                  value={form.codeInspector || ''}
                  readOnly
                />
              </s.FormControl>
              <s.FormControl className="auto">
                <label htmlFor="inspector">Nome do Aprovador</label>
                <input
                  type="text"
                  name="inspector"
                  id="inspector"
                  value={form.inspector || ''}
                  readOnly
                />
              </s.FormControl>
              <s.FormControl>
                <label htmlFor="situation">Situação da Peça</label>
                <div>
                  <input
                    type="radio"
                    id="approved"
                    name="situation"
                    value="Yes"
                    checked={form.situation === 'S' && true}
                    onClick={() =>
                      setForm((prevData) => ({
                        ...prevData,
                        situation: 'S',
                      }))
                    }
                  />
                  <label htmlFor="approved">Aprovado</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="rejected"
                    name="situation"
                    value="No"
                    checked={form.situation === 'N' && true}
                    onClick={() =>
                      setForm((prevData) => ({
                        ...prevData,
                        situation: 'N',
                      }))
                    }
                  />
                  <label htmlFor="rejected">Rejeitado</label>
                </div>
              </s.FormControl>
            </s.Row>

            {user.role === 'Supervisor' && (
              <s.Row>
                <s.FormControl>
                  <label htmlFor="codeSupervisor">Matricula Supervisor</label>
                  <input
                    type="text"
                    name="codeSupervisor"
                    id="codeSupervisor"
                    value={form.codeSupervisor}
                    readOnly
                  />
                </s.FormControl>
                <s.FormControl className="auto">
                  <label htmlFor="finalInspector">Aprovador Final</label>
                  <input
                    type="text"
                    name="finalInspector"
                    id="finalInspector"
                    value={form.supervisor}
                    readOnly
                  />
                </s.FormControl>
                <s.FormControl>
                  <label htmlFor="finalSituation">Situação da Peça</label>
                  <div>
                    <input
                      type="radio"
                      id="approved"
                      name="finalSituation"
                      value="Yes"
                      checked={form.finalCheck === 'S' && true}
                      onClick={() =>
                        setForm((prevData) => ({
                          ...prevData,
                          finalCheck: 'S',
                        }))
                      }
                    />
                    <label htmlFor="approved">Aprovado</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="rejected"
                      name="finalSituation"
                      value="No"
                      checked={form.finalCheck === 'N' && true}
                      onClick={() =>
                        setForm((prevData) => ({
                          ...prevData,
                          finalCheck: 'N',
                        }))
                      }
                    />
                    <label htmlFor="rejected">Rejeitado</label>
                  </div>
                </s.FormControl>
              </s.Row>
            )}
            <s.Action>
              <button type="submit">Confirmar</button>
            </s.Action>
          </s.Content>
        </form>

        <s.Parts>
          <table>
            <thead>
              <tr>
                <th>N° Serie</th>
                <th>Modelo</th>
                <th>Situação</th>
                {user.role === 'Supervisor' && <th>Avaliação Inicial</th>}
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td
                    className="key"
                    onClick={() => handleFindProcessInfo(item.serial_number)}
                  >
                    {item.serial_number}
                  </td>
                  <td>{item.model}</td>
                  <td>{item.status === 'S' ? 'Aprovado' : 'Reprovado'}</td>
                  {user.role === 'Supervisor' && <td>{item.inspector}</td>}
                  <td>{item.datetime_verif}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </s.Parts>
      </s.Card>
    </s.Container>
  )
}

export default Control
