import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  background-color: #000;
  color: #fff;
  padding: 10px 0;
  text-align: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const HeaderLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-size: 20px;
  font-weight: 600;

  &:hover {
    text-shadow: 3px 5px 2px rgba(207, 203, 203, 0.63);
  }

  &.active {
    text-shadow: 3px 5px 2px rgba(255, 0, 0, 0.63); /* Подсветка активной ссылки */
  }
`;
