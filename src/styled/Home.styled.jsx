import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const HomeContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 20px;
`;

export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Начнем отображать элементы слева */
  gap: 20px; /* Расстояние между элементами */
`;

export const MovieItem = styled.li`
  width: calc(16.666% - 20px); /* Ширина элемента, учитывая отступы */
  margin: 0;
  &:hover {
    box-shadow: 12px -9px 5px 0px rgba(232, 227, 227, 0.75);
    -webkit-box-shadow: 12px -9px 5px 0px rgba(232, 227, 227, 0.75);
    -moz-box-shadow: 12px -9px 5px 0px rgba(232, 227, 227, 0.75);
  }
`;

export const MovieLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    font-size: 18px;
    margin-top: 10px;
    text-align: center;
  }

  &:hover {
    text-shadow: 7px -4px 2px rgba(218, 213, 213, 0.6);
  }
`;
export const TopMoviesTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;
