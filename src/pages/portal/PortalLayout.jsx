import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { User } from '@phosphor-icons/react';
import * as s from './style';

const Portal = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if (!user) {
      navigate('/login/signin');
    }
  }, []);

  return (
    <div>
      <s.Header>
        <s.Span>Olá, {user ? user.name : '404'}</s.Span>
        <s.UserIcon>
          <User size={36} />
        </s.UserIcon>
      </s.Header>
      <Outlet />
    </div>
  );
};

export default Portal;
