import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendList = ({ friendsData }) => {
  return (
    <ul className={css.friendList}>
      {friendsData.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.item}>
          <span className={css[isOnline ? 'isOnline' : 'isOfline']}></span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
