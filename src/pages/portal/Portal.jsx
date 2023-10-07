import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import { List, SignOut, User } from '@phosphor-icons/react';
import Control from './Control/Control';
import Dashboard from './dashboard/Dashboard';
import Admin from './admin/Admin';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import { Container } from './Control/style';


const Portal = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [isMobile, setIsMobile] = useState(false);
  const [activePage, setActivePage] = useState('Control');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login/signin');
    }

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
  };

  function logout() {
    localStorage.removeItem('user');
    navigate('/login/signIn');
    
  }

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handlePageClick = (pageName) => {
    setActivePage(pageName);
    setIsSidebarOpen(false); // Feche o sidebar quando uma opção for clicada
  };

  return (
    <s.Container>
      <SideNavBar/>

      {activePage === 'Control' && (<Control />)}
      {activePage === 'Dashboard' && (<Dashboard />)}
      {activePage === 'Admin' && (<Admin />)}
    </s.Container>
  );
};

export default Portal;