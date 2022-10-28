import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DetailsContainer = styled.div`
  display: flex;
  padding: 30px;
  margin: 20px 30px 30px;
  background-color: #3f51b542;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const DetailsBtn = styled.button`
  margin: 20px 0 0 35px;
  padding: 0;
  border: none;
  cursor: pointer;
  font-weight: 700;
  background-color: transparent;
`;

export const DetailsImg = styled.img`
  width: 300px;
`;

export const DetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 30px;
`;

export const DetailsTitle = styled.h2`
  margin-left: 0;
`;

export const AddInfo = styled.h3`
  margin-left: 35px;
  margin-bottom: 10px;
`;

export const InfoList = styled.ul`
  text-decoration: none;
  margin-left: 0;
  margin-top: 0;
`;

export const InfoLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 600;

  &.active {
    color: #3f51b5;
    font-weight: 700;
    transform: scale(1.1);
  }
`;
