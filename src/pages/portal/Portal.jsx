import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import { List, SignOut, User } from '@phosphor-icons/react';
import Control from './Control/Control';
import Dashboard from './dashboard/Dashboard';
import Admin from './admin/Admin';
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Portal = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [activePage, setActivePage] = useState('Control');

  useEffect(() => {
    if (!user) {
      navigate('/login/signin');
    }
  }, [user]);

  const MessageLogout = () => {
    confirmAlert({
      customUI: ({ onClose }) => (
    	<s.CustomAlert>
    	  <h1>Encerrar sessão</h1>
    	  <p>Deseja realmente sair da sessão agora?</p>
    	  <button onClick={() => { logout(); onClose(); }}>Sim</button>
    	  <button onClick={onClose}>Não</button>
    	</s.CustomAlert>
      ),
    });
    // confirmAlert({
    //   title: 'Encerrar sessão',
    //   message: 'Deseja realmente sair da sessão agora?',
    //   buttons: [
    //     {
    //       label: 'Sim',
    //       onClick: () => logout()
    //     },
    //     {
    //       label: 'Não',
    //     }
    //   ]
    // });
  };

  function logout() {
    localStorage.removeItem('user');
    navigate('/login/signIn');

  }


  const handlePageClick = (pageName) => {
    setActivePage(pageName);
  };

  return (
    <s.Container>
      <SideNavBar MessageLogout={MessageLogout} activePage={handlePageClick} />

      {activePage === 'Control' && (<Control />)}
      {activePage === 'Dashboard' && (<Dashboard />)}
      {activePage === 'Admin' && (<Admin />)}
    </s.Container>
  );
};

export default Portal;