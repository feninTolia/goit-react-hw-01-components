import { Item } from './Statistics.styled';
import getRandomColor from 'utils/randomColor';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <Item color={getRandomColor()}>
      <span>{label}</span>
      <span> {`${percentage}%`}</span>
    </Item>
  );
};

export default StatisticsItem;
