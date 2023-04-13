import React, { useState } from 'react';
import { IdentificationCard, Key, User } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import Confirm from '../../../components/Confirm/Confirm';
import * as s from './style';
import api from '../../../services/api';

const SignUp = () => {
  const navigate = useNavigate();
  const [icon, setIcon] = useState(true);
  const [type, setType] = useState('password');
  const [form, setForm] = useState({});
  const [user, setUser] = useState({});
  const [loggin, setLoggin] = useState(false);

  return (
    <s.SignIn>
      <form method="post">
        <s.Title>Cadastro de Usuario</s.Title>
        <s.Row>
          <s.InputGroup>
            <s.iconWithInput className="iconWithInput code">
              <IdentificationCard size={30} className="icon" />
              <s.Input
                type="text"
                className="code"
                name="code"
                placeholder="Código"
                maxLength={3}
                required
              ></s.Input>
            </s.iconWithInput>
          </s.InputGroup>

          <s.InputGroup>
            <s.iconWithInput className="iconWithInput name">
              <User size={30} className="icon" />
              <s.Input
                type="text"
                className="name"
                name="name"
                placeholder="Nome"
                required
                readOnly
              ></s.Input>
            </s.iconWithInput>
          </s.InputGroup>
        </s.Row>

        <s.Row>
          <s.InputGroup>
            <s.iconWithInput className="iconWithInput">
              <Key size={30} className="icon" />
              <s.Input
                type="password"
                className="password"
                name="password"
                placeholder="Senha"
                maxLength={3}
                required
              ></s.Input>
            </s.iconWithInput>
          </s.InputGroup>

          <s.InputGroup>
            <s.iconWithInput className="iconWithInput">
              <Key size={30} className="icon" />
              <s.Input
                type="password"
                className="confirmPass"
                name="confirmPass"
                placeholder="Confirmar senha"
                required
              ></s.Input>
            </s.iconWithInput>
          </s.InputGroup>
        </s.Row>

        <Confirm message="Cadastrar" />
      </form>
    </s.SignIn>
  );
};

export default SignUp;
