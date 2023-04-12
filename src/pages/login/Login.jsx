import React from 'react';
import { Outlet } from 'react-router-dom';
import * as s from './style';

const Login = () => {
  return (
    <s.Cover>
      <s.Container>
        <Outlet />
      </s.Container>
    </s.Cover>
  );
};

export default Login;
