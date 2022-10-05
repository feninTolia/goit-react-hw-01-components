import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendList = ({ children }) => {
  return <ul className={css.friendList}>{children}</ul>;
};

FriendList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FriendList;
