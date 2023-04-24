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
import api from '../../../services/api';
import { toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [checkPass, setCheckPass] = useState(false);
  const [difPass, setDifPass] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [iconPass, setIconPass] = useState(true);
  const [iconConfirm, setIconConfirm] = useState(true);
  const [password, setPassword] = useState('password');
  const [confirmPass, setConfirmPass] = useState('password');

  const handleInput = (e, data) => {
    if (e && e.target) {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    } else if (data) {
      setForm({
        ...form,
        code: data.code,
        name: data.name,
      });
    }
  };

  const verifyUserCode = (e) => {
    e.target.value !== ''
      ? api
          .get('users/verify-user-code', {
            params: {
              code: e.target.value,
            },
          })
          .then((response) => {
            const { data } = response;
            const { info, statusCode } = data;

            if (statusCode === 200) {
              if (info.access === 'S') {
                handleInput(null, info);
                setIsDisabled(true);
                toast.warning(
                  `Olá ${info.name}, você já possui acesso ao portal!`
                );
              } else {
                handleInput(null, info);
                setIsDisabled(false);
              }
            } else {
              toast.error('Usuário não cadastrado no sistema!');
            }
          })
      : null;
  };

  const verifyPassword = (e) => {
    e.target.value !== ''
      ? api
          .get('users/verify-password', {
            params: {
              password: e.target.value,
            },
          })
          .then((response) => {
            const { data } = response;
            const { message, statusCode } = data;
            if (statusCode === 400) {
              setMessages([message]);
              setCheckPass(true);
            }
          })
      : null;
  };

  const verifyEqualPassword = (e) => {
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

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <s.SignIn>
      <form method="post" onSubmit={(e) => handleOnSubmit(e)}>
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
                onBlur={(e) => verifyUserCode(e)}
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
                value={form.name ? form.name : ''}
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
                onBlur={(e) => {
                  handleInput(e);
                  verifyPassword(e);
                }}
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
            {checkPass
              ? console.log(messages)
              : // <s.WarningSpan>
                //   <WarningCircle size={30} className="warning" />
                //   <span>{msg}</span>
                // </s.WarningSpan>
                null}
          </s.InputGroup>

          <s.InputGroup>
            <s.iconWithInput className="iconWithInput">
              <Key size={30} className="icon" />
              <s.Input
                type={confirmPass}
                className="confirmPass"
                name="confirmPass"
                placeholder="Confirmar senha"
                onInput={(e) => verifyEqualPassword(e)}
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
                <WarningCircle size={30} className="warning" />
                <span>Senha Diferente!</span>
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
