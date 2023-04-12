import React from 'react';
import * as s from './style';
import { Monitor, NotePencil, PresentationChart } from '@phosphor-icons/react';

const Home = () => {
  return (
    <s.Container>
      <s.Card>
        <NotePencil className="icon" />
        <span>Cadastro de Peças</span>
      </s.Card>
      <s.Card>
        <Monitor className="icon" />
        <span>Controle de Peças</span>
      </s.Card>
      <s.Card>
        <PresentationChart className="icon" />
        <span>Dashboard</span>
      </s.Card>
    </s.Container>
  );
};

export default Home;
