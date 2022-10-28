import styled from 'styled-components';

export const CastContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #3f51b542;
  margin: 20px 30px 30px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  transition-duration: 300ms;
`;

export const CastItem = styled.li`
  display: inline-block;
  text-decoration: none;
  width: 100%;
  max-width: 200px;
  margin: 10px;
  background: rgb(255, 255, 255);
  color: black;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 5px;
  transition-duration: 300ms;
`;

export const CastImg = styled.img`
  display: block;
  padding: 0px;
  margin: 0px;
  height: 260px;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const CastDescription = styled.div`
  padding: 5px;
  margin: 0px;
  font-size: 10px;
  color: #3f51b5;
`;

export const CastName = styled.h3`
  margin: 0px;
`;

export const CastCharacter = styled.p`
  margin: 0px;
`;
