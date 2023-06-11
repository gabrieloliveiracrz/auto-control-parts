import React from 'react';
import * as s from './style';

const Back = (props) => {
  return (
    <s.StyledLink to={props.redirect}>
      <s.Back>
        <button>{props.message}</button>
      </s.Back>
    </s.StyledLink>

  );
};

export default Back;
