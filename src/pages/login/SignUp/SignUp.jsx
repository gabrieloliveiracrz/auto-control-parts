import React, { useState } from 'react';
import {
  Eye,
  EyeSlash,
  IdentificationCard,
  Key,
  User,
  WarningCircle,
} from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import Confirm from '../../../components/Confirm/Confirm';
import * as s from '../style';

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [difPass, setDifPass] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [iconPass, setIconPass] = useState(true);
  const [iconConfirm, setIconConfirm] = useState(true);
  const [password, setPassword] = useState('password');
  const [confirmPass, setConfirmPass] = useState('password');

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const verifyPassword = (e) => {
    if (form.password === e.target.value) {
      setDifPass(false);
      setIsDisabled(false);
    } else {
      setDifPass(true);
      setIsDisabled(true);
    }
  };

  const changeEyePass = (e) => {
    if (iconPass === true) {
      setIconPass(false);
      setPassword('text');
    } else {
      setIconPass(true);
      setPassword('password');
    }
  };

  const changeEyeConfirm = (e) => {
    if (iconConfirm === true) {
      setIconConfirm(false);
      setConfirmPass('text');
    } else {
      setIconConfirm(true);
      setConfirmPass('password');
    }
  };

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
                type={password}
                className="password"
                name="password"
                placeholder="Senha"
                onInput={(e) => handleInput(e)}
                required
              ></s.Input>
              {iconPass === true ? (
                <Eye
                  size={30}
                  className="icon eye"
                  onClick={(e) => changeEyePass(e)}
                />
              ) : (
                <EyeSlash
                  size={30}
                  className="icon eye"
                  onClick={(e) => changeEyePass(e)}
                />
              )}
            </s.iconWithInput>
          </s.InputGroup>

          <s.InputGroup>
            <s.iconWithInput className="iconWithInput">
              <Key size={30} className="icon" />
              <s.Input
                type={confirmPass}
                className="confirmPass"
                name="confirmPass"
                placeholder="Confirmar senha"
                onInput={(e) => verifyPassword(e)}
                required
              ></s.Input>
              {iconConfirm === true ? (
                <Eye
                  size={30}
                  className="icon eye"
                  onClick={(e) => changeEyeConfirm(e)}
                />
              ) : (
                <EyeSlash
                  size={30}
                  className="icon eye"
                  onClick={(e) => changeEyeConfirm(e)}
                />
              )}
            </s.iconWithInput>

            {difPass ? (
              <s.WarningSpan>
                <WarningCircle size={30} className="warning" /> Senha Diferente!
              </s.WarningSpan>
            ) : null}
          </s.InputGroup>
        </s.Row>

        <Confirm message="Cadastrar" disabled={isDisabled} />
      </form>
    </s.SignIn>
  );
};

export default SignUp;
