import React, { useEffect } from 'react';
import * as s from './style';
import { useState } from 'react';
import api from '../../../../services/api';
import { toast } from 'react-toastify';

const User = () => {
  const [selecao, setSelecao] = useState('');
  const [data, setData] = useState([])
  const [info, setInfo] = useState({})
  const [form, setForm] = useState({
    code: '',
    name: '',
    permission: ''
  })

  // Função para lidar com a mudança de seleção
  const handleSelectChange = (event) => {
    setSelecao(event.target.value);
  };

  //Faz a busca dos usuarios cadastrados ou aguardando 
  useEffect(() => {
    // setData(test)
    api.get('/users')
      .then(({ data: { info } }) => {
        setData(info)
      })
  }, [])

  const handleRefreshData = () => {
    api.get('/users')
      .then(({ data: { info } }) => {
        setData(info)
      })
  }


  const handleFindUserInfo = (code) => {
    api
      .get(`/user/?code=${code}`)
      .then(({ data: { info } }) => {
        setForm(info)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    api.put('/users/permission', form)
    .then(({ data: { message, statusCode } }) => {
      if (statusCode === 200) {
        toast.message(message)
        handleRefreshData()
        refre
      }else{
        toast.warning(message)
      }
    })
    .catch((err) => {
      console.error(err)
    })
    .catch((err) => {
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
                <input type="text" name='cod' id='code' value={form.code || ''} readOnly />
              </s.FormControl>
              <s.FormControl>
                <label htmlFor="username">Nome</label>
                <input type="text" name='username' id='username' value={form.name || ''} readOnly />
              </s.FormControl>
              <s.FormControl className='auto'>
                <label htmlFor="office">Selecione uma opção:</label>
                <select
                  id="office"
                  name="office"
                  onChange={(e) => setForm((prevData) => ({ ...prevData, permission: e.target.value}))}
                value={form.permission || ''}
                >
                <option value="Aguardando" disabled>Selecione uma opção...</option>
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
                <td className='key' onClick={() => handleFindUserInfo(item.code)}>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.permission}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </s.Parts>
    </s.Card>
    </s.Container >
  );
};

export default User;
