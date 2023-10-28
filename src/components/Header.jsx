import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderStyled, Nav, HeaderLink } from '../styled/Header.styled';

const Header = () => {
  return (
    <div>
      <HeaderStyled>
        <Nav>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/movies">Movies</HeaderLink>
        </Nav>
      </HeaderStyled>
      <Suspense fallback={'Loading..'}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Header;
