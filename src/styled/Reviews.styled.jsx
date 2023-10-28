import styled from '@emotion/styled';

export const ReviewsContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

export const ReviewsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-block-end: 0px;
  margin-block-start: 0px;
  p {
    margin: 0;
    font-size: 25px;
  }
`;

export const ReviewItem = styled.li`
  width: 100%;
  max-width: 600px; /* Максимальная ширина элемента */
  margin: 0;
  padding: 20px;
  border: 1px solid #444;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5);

  h4 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    text-align: left;
  }
`;
