import styled from 'styled-components';
import backgroundImage from '../../assets/fundo_meur_novo_de_novo.png';
import { Link } from 'react-router-dom';

export const Cover = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  height: 100vh;
`;
