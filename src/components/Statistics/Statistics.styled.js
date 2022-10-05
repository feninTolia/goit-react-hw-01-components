import styled from 'styled-components';

export const Title = styled.h2`
  padding: 20px 0;
  font-size: 30px;
`;

export const StatList = styled.ul`
  padding: 0;
  display: flex;
`;

export const StatisticsSection = styled.div`
  text-align: center;
  margin: 0 auto;

  width: 300px;
  font-size: 24px;
  color: #1c1e21;

  background-color: rgb(233, 233, 233);
  box-shadow: 0px 0px 100px 10px rgb(120, 111, 111),
    0px 0px 50px 2px rgb(208, 205, 205);
`;

export const Item = styled.li`
  flex-grow: 0;
  flex-shrink: 1;
  width: 33.33%;
  list-style: none;
  padding: 10px;

  font-size: 16px;
  border-top: 1px solid #a5a5a5;
  background-color: ${p => p.color};

  :not(:last-child) {
    border-right: 1px solid #383e36;
  }
`;
