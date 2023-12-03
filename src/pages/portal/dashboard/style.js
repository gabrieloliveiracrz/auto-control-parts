import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  flex: 1;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`

export const Card = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.12);
  padding: 1rem;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  overflow: auto;
  max-width: 100%; // Alterado para 100% para ser responsivo

  @media (max-width: 768px) {
    padding: 0;
    height: auto; // Alterado para auto para ser responsivo
    border-radius: 0;
    flex-direction: column; // Adicionado para empilhar os gráficos
  }
`

export const Dash = styled.div`
  display: flex;
  flex-direction: row; // Alterado para row para manter a orientação dos gráficos

  @media (max-width: 768px) {
    flex-direction: column; // Alterado para column para empilhar os gráficos
  }
`

export const Graph = styled.div`
  flex: 1; // Alterado para 1 para ocupar o espaço disponível
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  & .auto {
    flex: 1;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;

  label {
    padding: 1px 4px;
    color: #f2f2f2;
  }

  input {
    padding: 0.4rem;
    background-color: #f2f2f2;
    border: none;
    border-radius: 8px;
    outline: none;
  }
`

export const Action = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;

  button {
    padding: 0.4rem 1.4rem;
    border: none;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(0, 0, 0, 0.6);
    color: #f2f2f2;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.04);
    border: 1px solid #f2f2f2;
    transition: 100ms;
  }
`
