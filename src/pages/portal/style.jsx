import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background-color: #0d0d0d;
`;

export const Span = styled.span`
  color: #f2f2f2;
  font-weight: var(--font-semibold);
  font-size: 1.8rem;
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

export const Footer = styled.footer`
  display: flex;
`;
