import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex: 1;
`

export const CustomAlert = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
  box-shadow: 0 20px 75px rgba(0, 0, 0, 0.13);
  color: #666;

  @media (max-width: 500px) {
    max-width: 90%;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  button {
    background-color: #121212;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    margin-right: 0.4rem;
    border-radius: 10px;

    &:hover {
      background-color: #666;
    }
  }
`
