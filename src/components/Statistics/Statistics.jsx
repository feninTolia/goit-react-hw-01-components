import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className={css.item}>
      <span className="label">{label}</span>
      <span className="percentage"> {percentage}</span>
    </li>
  );
};

export const StatisticsCard = ({ statData }) => {
  return (
    <section className={css.statistics}>
      <h2 className="title">Upload stats</h2>

      <ul className={css.statList}>
        {statData.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

StatisticsCard.propTypes = {
  statData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
