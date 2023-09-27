import React from 'react';
import * as s from './style';
import { useState } from 'react';

const Control = () => {
  const [selecao, setSelecao] = useState('');

  // Função para lidar com a mudança de seleção
  const handleSelectChange = (event) => {
    setSelecao(event.target.value);
  };

  const data = [
    { prefix: 'QU', model: 'Quadrado' },
    { prefix: 'CI', model: 'Círculo' },
    { prefix: 'TR', model: 'Triangulo' },
  ];
  return (
    <s.Container>
      <s.Card>

        <form action="" method="post">
          <s.Content>
            <s.Row>
              <s.FormControl>
                <label htmlFor="prefix">Prefixo</label>
                <input type="text" name='prefix' id='prefix'/>
              </s.FormControl>
              <s.FormControl className='auto'>
                <label htmlFor="model">Modelo</label>
                <input type="text" name='model' id='model' />
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
                <th>Prefixo</th>
                <th>Modelo</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.prefix}</td>
                  <td>{item.model}</td>
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
