import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { User } from '@phosphor-icons/react';
import * as s from './style';

const Portal = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <s.Header>
        <s.Span>Olá, {user && user.name}</s.Span>
        <s.UserIcon>
          <User size={36} />
        </s.UserIcon>
      </s.Header>
      <Outlet />
      <s.Footer>TCC Gabriel & Gabriel</s.Footer>
    </div>
  );
};

export default Portal;
