import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100vh;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 42px;
  background-color: #0e0e0e;
  border: 1px solid #6e6e6e;
  color: #f2f2f2;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    -webkit-box-shadow: 0px 0px 8px 1px rgba(110, 110, 110, 0.5);
    -moz-box-shadow: 0px 0px 8px 1px rgba(110, 110, 110, 0.5);
    box-shadow: 0px 0px 8px 1px rgba(110, 110, 110, 0.5);
    transition: 300;
  }

  & .icon {
    font-size: 16rem;
    font-weight: var(--font-semibold);
  }

  & span {
    font-size: 1.5rem;
    font-weight: var(--font-semibold);
  }
`;
