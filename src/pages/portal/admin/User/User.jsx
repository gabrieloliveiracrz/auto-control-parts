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
    { cod: '004', name: 'Rogerio', permission: 'Aguardando Liberação' },
    { cod: '001', name: 'Gabriel Ferreira', permission: 'Adm' },
    { cod: '002', name: 'Gabriel Guedes', permission: 'Supervisor' },
    { cod: '003', name: 'Juninho', permission: 'Inspector' },
  ];
  return (
    <s.Container>
      <s.Card>

        <form action="" method="post">
          <s.Content>
            <s.Row>
              <s.FormControl>
                <label htmlFor="cod">Matrícula</label>
                <input type="text" name='cod' id='cod' readOnly />
              </s.FormControl>
              <s.FormControl>
                <label htmlFor="username">Nome</label>
                <input type="text" name='username' id='username' />
              </s.FormControl>
              <s.FormControl className='auto'>
                <label htmlFor="office">Selecione uma opção:</label>
                <select
                  id="office"
                  name="office"
                  value={selecao}
                  onChange={handleSelectChange}
                >
                  <option value="" disabled>Selecione uma opção...</option>
                  <option value="inspector">Inspetor</option>
                  <option value="supervisor">Supervisor</option>
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
                  <td>{item.cod}</td>
                  <td>{item.name}</td>
                  <td>{item.permission}</td>
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
