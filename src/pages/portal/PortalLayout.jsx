import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import * as s from './style';
import { List, SignOut, User } from '@phosphor-icons/react';
import Control from './Control/Control';
import Dashboard from './dashboard/Dashboard';
import Admin from './admin/Admin';
import Sidebar from '../../components/Sidebar/Sidebar'; // Importe o novo componente

const Portal = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [isMobile, setIsMobile] = useState(false);
  const [activePage, setActivePage] = useState('Control');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    console.log(isSidebarOpen);

  }, [isSidebarOpen])
  

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

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handlePageClick = (pageName) => {
    setActivePage(pageName);
    setIsSidebarOpen(false); // Feche o sidebar quando uma opção for clicada
  };

  return (
    <div>
      {isMobile ? (
        <s.Header>
          <s.UserIcon>
            <User size={36} weight='bold' />
          </s.UserIcon>
          <List size={32} onClick={toggleSidebar} color='#f2f2f2' weight='bold' />
        </s.Header>
      ) : (
        <s.Header>
          <s.UserIcon>
            <User size={36} weight='bold' />
          </s.UserIcon>
          <s.Pages>
            <s.Page className='visited'>
              <span onClick={() => handlePageClick('Control')} className={activePage === 'Control' ? 'visited' : ''}>Controle de Peças</span>
            </s.Page>
            <s.Page>
              <span onClick={() => handlePageClick('Dashboard')} className={activePage === 'Dashboard' ? 'visited' : ''}>Dashboard de Peças</span>
            </s.Page>
            <s.Page>
              <span onClick={() => handlePageClick('Admin')} className={activePage === 'Admin' ? 'visited' : ''}>Painel de Admin</span>
            </s.Page>
          </s.Pages>

          <SignOut size={32} color='#f2f2f2' cursor="pointer" weight='bold' />
        </s.Header>
      )}

      {/* Renderize o Sidebar na versão mobile quando isSidebarOpen for verdadeiro */}
      {isMobile && isSidebarOpen && (
        <Sidebar activePage={activePage} handlePageClick={handlePageClick} />
      )}

      {activePage === 'Control' && (<Control />)}
      {activePage === 'Dashboard' && (<Dashboard />)}
      {activePage === 'Admin' && (<Admin />)}
    </div>
  );
};

export default Portal;
