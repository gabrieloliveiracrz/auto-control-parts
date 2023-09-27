import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Student } from '@phosphor-icons/react';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #121212;
  padding: 2rem;
  border: 1px solid #6e6e6e;
  gap: 2rem;
  width: 60%;
  border-radius: 10px;
`;

export const Graph = styled.div`
  display: flex;
  justify-content: space-between;
`
