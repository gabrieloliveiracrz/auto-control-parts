import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.12);
  padding: 2rem;
  border: 1px solid #6e6e6e;
  gap: 2rem;
  width: 36rem;
  border-radius: 10px;
`;

export const Pages = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Page = styled.div`
  display: flex;
  justify-content: center;
  color: #f2f2f2;
  font-size: 1.4rem;
  border-right: 1px solid #f2f2f2;
  flex: 1;

  span{
    cursor: pointer;

    &.visited{
      color: #00b4d8;
      border-bottom: 3px solid #00b4d8;
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

  input{
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
    cursor: pointer;
  }
`
