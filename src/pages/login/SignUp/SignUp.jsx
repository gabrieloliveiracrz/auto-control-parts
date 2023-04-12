import React, { useState } from 'react';
import { EyeSlash, Eye, Key, User } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import Confirm from '../../../components/Confirm/Confirm';
import * as s from './style';
import api from '../../../services/api';

const SignUp = () => {
  const navigate = useNavigate();
  const [icon, setIcon] = useState(true);
  const [type, setType] = useState('password');
  const [form, setForm] = useState({});
  const [user, setUser] = useState({});
  const [loggin, setLoggin] = useState(false);

  return (
    <s.SignIn>
      <form method="post">
        <s.Title>Cadastro de Usuario</s.Title>
      </form>
    </s.SignIn>
  );
};

export default SignUp;
