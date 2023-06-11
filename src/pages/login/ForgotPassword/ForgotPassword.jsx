import React from 'react';
import * as s from '../style';
import { Envelope } from '@phosphor-icons/react';
import Confirm from '../../../components/Confirm/Confirm';
import Back from '../../../components/Back/Back';

const ForgotPassword = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <s.Container>
        <form method="get" onSubmit={(e) => onSubmit(e)}>
          <s.Content>
            <s.Title>Esqueci a senha</s.Title>
            <s.InputGroup>
              <s.IconWithInput className="iconWithInput">
                <Envelope size={30} className="icon" />
                <s.Input
                  type="email"
                  className="email"
                  name="email"
                  placeholder="E-mail"
                ></s.Input>
              </s.IconWithInput>
            </s.InputGroup>
            <s.ButtonGroup>
              <Confirm message="Enviar" />
              <Back redirect="/" message="Voltar" />
            </s.ButtonGroup>
          </s.Content>
        </form>
      </s.Container>
    </div>
  );
};

export default ForgotPassword;
