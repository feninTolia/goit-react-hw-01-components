import styled from 'styled-components';

export const UserName = styled.p`
  font-weight: bold;
`;

export const Label = styled.span`
  display: block;
  font-weight: bold;
  color: #25c2a0;
`;

export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
  object-position: 0px 10px;
  background-color: #6d786b;
`;

export const Stats = styled.ul`
  padding: 0;
  display: flex;
`;

export const StatsItems = styled.li`
  flex-grow: 0;
  flex-shrink: 1;
  width: 33.33%;
  list-style: none;
  padding: 10px;

  font-size: 16px;
  border-top: 1px solid #a5a5a5;
  background-color: #d1d1d1;

  :not(:last-child) {
    border-right: 1px solid #383e36;
  }
`;
