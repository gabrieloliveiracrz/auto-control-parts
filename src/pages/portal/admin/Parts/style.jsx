import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 0;
    border-radius: 0px;
    flex: 1;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.12);
  padding: 1rem;
  border: 1px solid #f2f2f2;
  flex: 1;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 0;
    border-radius: 0px;
    flex: 1;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  color: #f2f2f2;
  font-size: 1.4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`

export const Row = styled.div`
  display: flex;
  gap: 1rem;

  & .auto {
    flex: 1;
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
  justify-content: flex-end;
  gap: 1rem;

  button {
    padding: 0.6rem 2rem;
    border: none;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(0, 0, 0, 0.6);
    color: #f2f2f2;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.04);
    border: 1px solid #f2f2f2;
    transition: 100ms;
  }
`

export const Parts = styled.div`
  display: flex;

  table {
    padding: 0.2rem;
    flex: 1;
    border-collapse: collapse;
    background-color: rgba(255, 255, 255, 0.12);

    th,
    td {
      border: 1px solid #ccc; /* Adapte a espessura e a cor da borda conforme necessário */
      padding: 8px;
      text-align: center;
    }

    th {
      color: #f2f2f2;
      font-weight: 600;
    }

    td {
      color: #f2f2f2;
    }

    .key {
      color: #00b4d8;
      text-decoration: underline;
      cursor: pointer;
      font-weight: 600;

      &:hover {
        color: #008cb9;
      }
    }
  }
`
