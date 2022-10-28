import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 30px 30px;
  padding: 30px;
  background-color: #3f51b542;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const HomeTitle = styled.h1`
  margin: 30px, 0;
  text-decoration: none;
  font-weight: 700;
  color: #3f51b5;
`;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`;

export const MovieItem = styled.li`
  display: inline-block;
  text-decoration: none;
  width: 100%;
  max-width: 200px;
  margin: 10px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 5px;
  background: rgb(255, 255, 255);
  color: black;
  transition-duration: 300ms;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: rgb(0 0 0 / 8%) 0px 10px 25px;
  }
`;

export const MovieLink = styled(NavLink)`
  text-decoration: none;
`;

export const MovieImg = styled.img`
  display: block;
  padding: 0px;
  margin: 0px;
  height: 260px;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const MovieTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  margin: 0px;
  font-size: 10px;
  color: #3f51b5;
`;
