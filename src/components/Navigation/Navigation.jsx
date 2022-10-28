import { NavContainer, NavList, NaviLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavContainer>
      <NavList>
        <li>
          <NaviLink to="/" end>
            Home
          </NaviLink>
        </li>
        <li>
          <NaviLink to="movies">Movies</NaviLink>
        </li>
      </NavList>
    </NavContainer>
  );
};
