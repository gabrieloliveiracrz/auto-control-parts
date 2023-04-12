import React from 'react';
import * as s from './style';

const Confirm = (props) => {
  return (
    <s.Confirm>
      <button type="submit">{props.message}</button>
    </s.Confirm>
  );
};

export default Confirm;
