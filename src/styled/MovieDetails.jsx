import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const MovieDetailsContainer = styled.div`
  background-color: #000;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const BackButton = styled.button`
  background-color: #e50914;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 8px;
  position: absolute;
  top: 50px;
  left: 10px;
`;

export const MovieImage = styled.img`
  max-width: 200px;
  height: auto;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const MovieTitle = styled.h3`
  font-size: 22px;
  margin: 0;
`;

export const UserScore = styled.p`
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 5pxpx;
`;

export const OverviewTitle = styled.h4`
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 5px;
  margin: 0px;
`;
export const OverviewText = styled.p`
  font-size: 10px;
  width: 700px;
  margin-top: 5px;
`;

export const GenresTitle = styled.h4`
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const GenresList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const GenreItem = styled.li`
  margin-bottom: 0px;
  font-size: 10px;
`;

export const AdditionalInfoTitle = styled.p`
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const AdditionalInfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0px;
`;

export const AdditionalInfoItem = styled.li`
  font-size: 12px;
  margin-bottom: 5px;
`;

export const AdditionalInfoLink = styled(Link)`
  color: #e50914;
  text-decoration: none;
  font-size: 8px;
`;

export const CastReviewsLink = styled(Link)`
  color: #e50914;
  text-decoration: none;
  font - size: 8px;
`;
