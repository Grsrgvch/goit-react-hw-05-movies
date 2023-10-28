import styled from '@emotion/styled';
export const CastContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

export const CastList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-block-end: 0px;
  margin-block-start: 0px;
  p {
    margin: 0;
    font-size: 25px;
  }
`;

export const CastItem = styled.li`
  width: calc(16.666% - 20px);
  margin: 0;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
  }

  p {
    font-size: 18px;
    margin-top: 10px;
    text-align: center;
  }
`;
