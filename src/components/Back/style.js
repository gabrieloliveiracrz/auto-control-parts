import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Back = styled.div`
  display: flex;
  justify-content: center;

  & button {
    padding: 1rem;
    width: 100%;
    border-radius: 10px;
    outline: none;
    border: 1px solid #242424;
    background-color: #0e0e0e;
    color: #f2f2f2;
    font-size: 1.6rem;
    font-weight: var(--font-semibold);
    cursor: pointer;
  }

  & button:hover {
    background-color: #6e6e6e;
    transition: 300ms;
  }

  & button:disabled {
    background-color: #6e6e6e;
    transition: 300ms;
    cursor: not-allowed;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
