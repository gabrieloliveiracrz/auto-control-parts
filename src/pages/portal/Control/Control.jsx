import React, { useEffect, useState } from 'react'
import * as s from './style'

const Control = () => {
  const [data, setData] = useState([])
  const [info, setInfo] = useState({})
  const test = [
    {
      serie: 'QU123',
      model: 'Item 1',
      situation: 'Aprovado',
      inspector: 'Gabriel de Oliveira Ferreira',
    },
    {
      serie: 'TR342',
      model: 'Item 2',
      situation: 'Aprovado',
      inspector: 'Gabriel de Oliveira Ferreira',
    },
    {
      serie: 'CI534',
      model: 'Item 3',
      situation: 'Recusado',
      inspector: 'Gabriel de Oliveira Ferreira',
    },
  ]

  useEffect(() => {
    setData(test)
  }, [])

  // Busca todos os registros já cadastrados
  // useEffect(() => {
  //   api
  //     .get('/')
  //     .then((response) => {
  //       setData(test)
  //     })
  //     .catch((err) => {
  //       console.error(err)
  //     })
  // }, [])

  const testGetinfo = {
    date: '2023-10-21',
    serie: 'QU123',
    model: 'Item 1',
    inspector: 'Gabriel de Oliveira Ferreira',
    situation: 'No',
    finalInspector: 'Admin',
    finalCheck: 'Yes',
  }

  // Busca as informações do processo buscado
  const handleFindProcessInfo = (serie) => {
    console.log(testGetinfo)
    setData(response)
    // api
    //   .get(`/${serie}`)
    //   .then((response) => {
    //     setData(response)
    //   })
    //   .catch((err) => {
    //     console.error(err)
    //   })
  }

  return (
    <s.Container>
      <s.Card>
        <s.Title>
          <h3>Selecione uma das peças e faça a análise necessária</h3>
        </s.Title>
        <form method="post">
          <s.Content>
            <s.Row>
              <s.FormControl>
                <label htmlFor="date">Data de Inspeção</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={info.date || ''}
                  readOnly
                />
              </s.FormControl>
              <s.FormControl>
                <label htmlFor="serie">N° Serie</label>
                <input
                  type="text"
                  name="serie"
                  id="serie"
                  value={info.serie || ''}
                />
              </s.FormControl>
              <s.FormControl className="auto">
                <label htmlFor="model">Modelo</label>
                <input
                  type="text"
                  name="model"
                  id="model"
                  value={info.model || ''}
                />
              </s.FormControl>
            </s.Row>
            <s.Row>
              <s.FormControl className="auto">
                <label htmlFor="inspector">Nome do Aprovador</label>
                <input
                  type="text"
                  name="inspector"
                  id="inspector"
                  value={info.inspector}
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
                    checked={info.situation === 'Yes'}
                  />
                  <label htmlFor="approved">Aprovado</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="rejected"
                    name="situation"
                    value="No"
                    checked={info.situation === 'No'}
                  />
                  <label htmlFor="rejected">Rejeitado</label>
                </div>
              </s.FormControl>
            </s.Row>

            <s.Row>
              <s.FormControl className="auto">
                <label htmlFor="finalInspector">Aprovador Final</label>
                <input
                  type="text"
                  name="finalInspector"
                  id="finalInspector"
                  value={info.finalInspector}
                />
              </s.FormControl>
              <s.FormControl>
                <label htmlFor="finalSituation">Situação da Peça</label>
                <div>
                  <input
                    type="radio"
                    id="finalSituation"
                    name="finalSituation"
                    value="Yes"
                    checked={info.finalCheck === 'Yes'}
                  />
                  <label htmlFor="approved">Aprovado</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="finalSituation"
                    name="finalSituation"
                    value="No"
                    checked={info.finalCheck === 'No'}
                  />
                  <label htmlFor="rejected">Rejeitado</label>
                </div>
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
                <th>N° Serie</th>
                <th>Modelo</th>
                <th>Situação</th>
                <th>Inspetor</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td
                    className="key"
                    onClick={() => handleFindProcessInfo(item.serie)}
                  >
                    {item.serie}
                  </td>
                  <td>{item.model}</td>
                  <td>{item.situation}</td>
                  <td>{item.inspector}</td>
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
