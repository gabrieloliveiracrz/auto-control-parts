import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Student } from '@phosphor-icons/react';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    flex: 1;
  }
`;


export const Card = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.12);
  padding: 1rem;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  max-width: 65%;

  @media (max-width: 768px) {
    padding: 0;
    border-radius: 0;
    flex: 1;
    max-width: 100%;
  }
`;

export const Graph = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }

`;
