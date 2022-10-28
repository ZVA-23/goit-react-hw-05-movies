import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #3f51b542;
  margin: 20px 30px 30px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
  padding: 0;
`;

export const NaviLink = styled(NavLink)`
  text-decoration: none;
  font-size: 27px;
  font-weight: 700;
  color: rgb(236, 236, 241);

  &.active {
    color: #3f51b5;
  }
`;
