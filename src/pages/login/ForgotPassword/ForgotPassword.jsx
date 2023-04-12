import React from 'react';
// import * as s from '../style';
import { Envelope } from '@phosphor-icons/react';

const ForgotPassword = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <s.Container>
        <form method="get" onSubmit={(e) => onSubmit(e)}>
          <s.SignIn>
            <s.Title>Esqueci a senha</s.Title>
            <s.InputGroup>
              <s.iconWithInput className="iconWithInput">
                <Envelope size={30} className="icon" />
                <s.Input
                  type="email"
                  className="email"
                  name="email"
                  placeholder="E-mail"
                ></s.Input>
              </s.iconWithInput>
            </s.InputGroup>
            <s.ForgotGroup>
              <s.StyledLink to="/login">
                <button className="back">Voltar</button>
              </s.StyledLink>
              <button type="submit" className="login">
                Enviar
              </button>
            </s.ForgotGroup>
          </s.SignIn>
        </form>
      </s.Container>
    </div>
  );
};

export default ForgotPassword;
