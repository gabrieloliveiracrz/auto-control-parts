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
  background-color: #4A545C;
  border: 1px solid #6e6e6e;
  width: 36rem;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

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

  & .auto{
    flex: 1;
  }
`

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;

  label{
    padding: 1px 4px;
    color: #f2f2f2;
  }

  input, select{
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

  button{
    padding: 0.6rem 2rem;
    border: none;
    border-radius:8px;
    background-color: #83A4A4;
    color: #f2f2f2;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
  }

  button:hover{
    background-color: #657B81;
    transition: 100ms;
  }
`

export const Parts = styled.div`
  display: flex;

  table{
    text-align: center;
    padding: 0.2rem;
    flex: 1;
    border: 1px solid #6e6e6e;
    background-color: #eee7e7;

    th,
    td {
    border: 1px solid #ccc; /* Adapte a espessura e a cor da borda conforme necessário */
    padding: 8px;
    text-align: left;
  }


    th{
      color: #00b4d8;
    }

    td{
      color: #121212;
    }
  }
`