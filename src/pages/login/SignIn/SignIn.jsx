import React, { useState } from 'react';
import { EyeSlash, Eye, Key, User } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import Confirm from '../../../components/Confirm/Confirm';
import * as s from './style';
import api from '../../../services/api';

const SignIn = () => {
  const navigate = useNavigate();
  const [icon, setIcon] = useState(true);
  const [type, setType] = useState('password');
  const [form, setForm] = useState({});
  const [user, setUser] = useState({});
  const [loggin, setLoggin] = useState(false);

  const handleLogininputs = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    validateUser();
  };

  const validateUser = () => {
    api
      .post('/usuarios/login', {
        code: form.code,
        password: form.password,
      })
      .then((response) => {
        if (response.data.statusCode === 200) {
          setUser(response.data.info);
          setLoggin(true);
        } else {
          setUser('');
          console.log(user);
        }
      });
  };

  if (loggin) {
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/');
  }

  const changeEye = (e) => {
    if (icon === true) {
      setIcon(false);
      setType('text');
    } else {
      setIcon(true);
      setType('password');
    }
  };

  return (
    <s.SignIn>
      <form method="post" onSubmit={(e) => onSubmit(e)}>
        <s.Title>Bem-vindo(a)!</s.Title>
        <s.InputGroup>
          <s.iconWithInput className="iconWithInput">
            <User size={30} className="icon" />
            <s.Input
              type="text"
              className="username"
              name="code"
              placeholder="Usuário"
              required
              onChange={(e) => handleLogininputs(e)}
            ></s.Input>
          </s.iconWithInput>
        </s.InputGroup>
        <s.InputGroup>
          <s.iconWithInput>
            <Key size={30} className="icon" />
            <s.Input
              type={type}
              className="password"
              id="password"
              name="password"
              placeholder="Senha"
              required
              onChange={(e) => handleLogininputs(e)}
            ></s.Input>
            {icon === true ? (
              <Eye
                size={30}
                className="icon eye"
                onClick={(e) => changeEye(e)}
              />
            ) : (
              <EyeSlash
                size={30}
                className="icon eye"
                onClick={(e) => changeEye(e)}
              />
            )}
          </s.iconWithInput>
          <s.StyledLink to="/forgotPassword">
            <s.Span>Esqueceu a senha?</s.Span>
          </s.StyledLink>
        </s.InputGroup>
        <Confirm message="Entrar" />
      </form>

      <s.SignUp>
        <s.p>
          Ainda não possui acesso?{' '}
          <s.StyledLink to="/login/signUp">
            <s.Span>Clique Aqui</s.Span>
          </s.StyledLink>
        </s.p>
      </s.SignUp>
    </s.SignIn>
  );
};

export default SignIn;