import { Component } from 'react';
import PropTypes from 'prop-types';

import css from './FriendList.module.css';

export default class FriendListItem extends Component {
  static propTypes = {
    friendsData: PropTypes.arrayOf(
      PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };

  render() {
    const { friendsData } = this.props;

    return friendsData.map(({ id, isOnline, avatar, name }) => (
      <li key={id} className={css.item}>
        <span className={css[isOnline ? 'isOnline' : 'isOfline']}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    ));
  }
}
