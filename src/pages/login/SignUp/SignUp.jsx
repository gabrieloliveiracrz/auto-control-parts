import React, { useState } from 'react';
import {
  CloudSlash,
  Eye,
  EyeSlash,
  IdentificationCard,
  Key,
  User,
  WarningCircle,
} from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import Confirm from '../../../components/Confirm/Confirm';
import Back from '../../../components/Back/Back';
import * as s from '../style';
import api from '../../../services/api';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [form, setForm] = useState({});
  const [difPass, setDifPass] = useState(false);
  const [iconPass, setIconPass] = useState(true);
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [isValidLen, setIsValidLen] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasDigit, setHasDigit] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [capsActiveField, setCapsActiveField] = useState(null);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const isValidPasswordLen = newPassword.length <= 32 && newPassword.length >= 8;
    const hasUppercase = /[A-Z]/.test(newPassword);
    const hasDigit = /\d/.test(newPassword);
    const hasSpecialChar = /[!@#$%^&*]/.test(newPassword);

    setIsValidLen(isValidPasswordLen);
    setHasUppercase(hasUppercase);
    setHasDigit(hasDigit);
    setHasSpecialChar(hasSpecialChar);

    const isPasswordValid = isValidPasswordLen && hasUppercase && hasDigit && hasSpecialChar;
    setIsPasswordValid(isPasswordValid);
  };

  const isFormFilled = password.trim() !== '';

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
              toast.warning(
                `Olá ${info.name}, você já possui acesso ao portal!`
              );
            } else {
              handleInput(null, info);
            }
          } else {
            toast.error('Usuário não cadastrado no sistema!');
            handleInput(null, { name: '' });
          }
        })
      : null;
  };

  const verifyEqualPassword = (e) => {
    if (form.password === e.target.value) {
      setDifPass(false);
    } else {
      setDifPass(true);
    }
  };

  const changeEyePass = (e) => {
    if (iconPass === true) {
      setIconPass(false);
      setType('text');
    } else {
      setIconPass(true);
      setType('password');
    }
  };

  const capsLock = (e, fieldName) => {
    const isPasswordField = fieldName === 'pass' || fieldName === 'conf';

    if (e.getModifierState('CapsLock')) {
      setCapsActiveField(fieldName);
    } else if (capsActiveField === fieldName) {
      setCapsActiveField(null);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <s.Content>
      <form method="post" onSubmit={(e) => handleOnSubmit(e)}>
        <s.Title>Cadastro de Usuario</s.Title>
        <s.Row>
          <s.IconWithInput className="IconWithInput code">
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
          </s.IconWithInput>

          <s.IconWithInput className="IconWithInput name">
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
          </s.IconWithInput>
        </s.Row>

        <s.Row>
          <s.InputGroup>
            <s.IconWithInput className="IconWithInput">
              <Key size={30} className="icon" />
              <s.Input
                type={type}
                className="password"
                name="password"
                placeholder="Senha"
                onBlur={(e) => {
                  handleInput(e);
                }}
                onInput={(e) => handlePasswordChange(e)}
                onKeyDown={(e) => capsLock(e, 'pass')}
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
            </s.IconWithInput>
            {capsActiveField === 'pass' && (
              <s.WarningSpan>
                <WarningCircle size={30} />
                CapsLock Ativado!
              </s.WarningSpan>
            )}
            {isFormFilled && !isValidLen && (
              <s.WarningSpan>
                <WarningCircle size={30} className="warning" />
                <span>A senha deve ter entre 8 e 32 caracteres.</span>
              </s.WarningSpan>
            )}
            {isFormFilled && !hasUppercase && (
              <s.WarningSpan>
                <WarningCircle size={30} className="warning" />
                <span>A senha deve conter pelo menos uma letra maiúscula.</span>
              </s.WarningSpan>
            )}
            {isFormFilled && !hasDigit && (
              <s.WarningSpan>
                <WarningCircle size={30} className="warning" />
                <span>A senha deve conter pelo menos um dígito.</span>
              </s.WarningSpan>
            )}
            {isFormFilled && !hasSpecialChar && (
              <s.WarningSpan>
                <WarningCircle size={30} className="warning" />
                <span>A senha deve conter pelo menos um caractere especial.</span>
              </s.WarningSpan>
            )}
          </s.InputGroup>

          <s.InputGroup>
            <s.IconWithInput className="IconWithInput">
              <Key size={30} className="icon" />
              <s.Input
                type={type}
                className="confirmPass"
                name="confirmPass"
                placeholder="Confirmar senha"
                onInput={(e) => verifyEqualPassword(e)}
                onKeyDown={(e) => capsLock(e, 'conf')}
                required
              ></s.Input>
            </s.IconWithInput>
            {capsActiveField === 'conf' &&  (
              <s.WarningSpan>
                <WarningCircle size={30} />
                CapsLock Ativado!
              </s.WarningSpan>
            )}
            {difPass ? (
              <s.WarningSpan>
                <WarningCircle size={30} className="warning" />
                <span>Senha Diferente!</span>
              </s.WarningSpan>
            ) : null}
          </s.InputGroup>
        </s.Row>

        <s.ButtonGroup>
          <Confirm message="Cadastrar" disabled={!isPasswordValid || difPass} />
          <Back redirect="/" message="Voltar" />
        </s.ButtonGroup>
      </form>
    </s.Content>
  );
};

export default SignUp;
