import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow-y: auto;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.12);
  padding: 1rem;
  border: 1px solid #f2f2f2;
  max-width: 600px;
  max-height: 600px;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-height: 100%;
    padding: 0;
    border-radius: 0px;
    flex: 1;
  }
`

export const Pages = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
    flex: 1;
  }
`

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f2f2f2;
  font-size: 1.4rem;
  border-right: 1px solid #f2f2f2;
  flex: 1;

  span {
    cursor: pointer;

    &.visited {
      color: #00b4d8;
      transition: 100ms;
    }
  }

  &:last-child {
    border: none;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
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
    cursor: pointer;
  }
`
