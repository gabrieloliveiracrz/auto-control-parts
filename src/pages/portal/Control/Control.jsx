import React from 'react';
import * as s from './style';

const Control = () => {
  const data = [
    { serie: 'QU123', model: 'Item 1', situation: 'Aprovado', img: 'QU123', inspector: 'Gabriel de Oliveira Ferreira' },
    { serie: 'TR342', model: 'Item 2', situation: 'Aprovado', img: 'TR342', inspector: 'Gabriel de Oliveira Ferreira' },
    { serie: 'CI534', model: 'Item 3', situation: 'Recusado', img: 'CI534', inspector: 'Gabriel de Oliveira Ferreira' },
  ];

  return (
    <s.Container>
      <s.Card>
        <s.Title>
          <h3>Selecione uma das peças e faça a análise necessária</h3>
        </s.Title>
        <form action="" method="post">
          <s.Content>
            <s.Row>
              <s.FormControl>
                <label htmlFor="date">Data de Inspeção</label>
                <input type="date" name='date' id='date' readOnly />
              </s.FormControl>
              <s.FormControl>
                <label htmlFor="serie">N° Serie</label>
                <input type="text" name='serie' id='serie' />
              </s.FormControl>
              <s.FormControl className='auto'>
                <label htmlFor="model">Modelo</label>
                <input type="text" name='model' id='model' />
              </s.FormControl>
            </s.Row>
            <s.Row>
              <s.FormControl className='auto'>
                <label htmlFor="inspector">Nome do Aprovador</label>
                <input type="text" name='inspector' id='inspector' />
              </s.FormControl>
              <s.FormControl>
                <label htmlFor="situation">Situação da Peça</label>
                <div>
                  <input type="checkbox" id="situation" name="situation" />
                  <label htmlFor="approved">Aprovado</label>
                </div>
                <div>
                  <input type="checkbox" id="situation" name="situation" />
                  <label htmlFor="rejected">Rejeitado</label>
                </div>
              </s.FormControl>
            </s.Row>

            <s.Row>
              <s.FormControl className='auto'>
                <label htmlFor="finalInspector">Aprovador Final</label>
                <input type="text" name='finalInspector' id='finalInspector' />
              </s.FormControl>
              <s.FormControl>
                <label htmlFor="finalSituation">Situação da Peça</label>
                <div>
                  <input type="checkbox" id="finalSituation" name="finalSituation" />
                  <label htmlFor="approved">Aprovado</label>
                </div>
                <div>
                  <input type="checkbox" id="finalSituation" name="finalSituation" />
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
                <th>Foto</th>
                <th>Inspetor</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className='key'>{item.serie}</td>
                  <td>{item.model}</td>
                  <td>{item.situation}</td>
                  <td>{item.img}</td>
                  <td>{item.inspector}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </s.Parts>
      </s.Card>
    </s.Container>
  );
};

export default Control;
