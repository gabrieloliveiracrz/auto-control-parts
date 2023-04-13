import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';

const Confirm = (props) => {
  const navigate = useNavigate();
  return (
    <s.Confirm>
      <button type="submit">{props.message}</button>
    </s.Confirm>
  );
};

export default Confirm;
