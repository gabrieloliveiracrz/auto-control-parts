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

export const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border: 1px solid #242424;
  border-radius: 10px;
  padding: 2.5rem;
  background-color: #0e0e0e;

  & form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: var(--font-bold);
  text-align: center;
  color: #f2f2f2;
`;

export const Row = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

export const iconWithInput = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #242424;
  background-color: #0e0e0e;
  border-radius: 10px;
  padding: 1rem;
  gap: 0.75rem;

  &:has(input:focus) {
    -webkit-box-shadow: 0px 0px 8px 1px rgba(110, 110, 110, 0.5);
    -moz-box-shadow: 0px 0px 8px 1px rgba(110, 110, 110, 0.5);
    box-shadow: 0px 0px 8px 1px rgba(110, 110, 110, 0.5);
    transition: 300ms;
  }

  & .icon {
    color: #f2f2f2;
  }

  & .eye {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  border: none;
  width: 18rem;
  background-color: #0e0e0e;
  outline: none;
  color: #f2f2f2;
  font-size: 1rem;
  font-weight: var(--font-light);

  &::placeholder {
    font-size: 1.2rem;
    color: #f2f2f2;
    font-weight: var(--font-regular);
    opacity: 0.5;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Span = styled.span`
  color: #00b4d8;
  cursor: pointer;
  font-weight: var(--font-light);
  font-size: 1rem;

  &:hover {
    color: #008cb9;
  }
`;

export const p = styled.p`
  color: #f2f2f2;
  font-weight: var(--font-light);
  font-size: 1rem;
`;

export const SignUp = styled.div`
  text-align: center;
`;

export const WarningSpan = styled.span`
  display: flex;
  align-items: center;
  color: #f77a13;
  font-weight: var(--font-regular);
  animation-name: pull-down;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;

  & .warning {
    color: #f77a13;
    font-weight: var(--font-regular);
    padding-right: 2px;
  }

  @keyframes pull-down {
    from {
      transform: translateY(-40%);
    }
    to {
      transform: translateY(0);
    }
  }
`;
