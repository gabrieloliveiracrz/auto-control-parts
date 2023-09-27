import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #121212;
  margin-bottom: 2rem;
`;

export const Pages = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-semibold);
  font-size: 1.2rem;
  border-right: 1px solid #f2f2f2;
  color: #f2f2f2;
  width: 12rem;

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
`;

export const UserIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f2f2f2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

