import css from './FriendList.module.css';

const FriendList = ({ friendsData }) => {
  return (
    <ul className={css.friendList}>
      {friendsData.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.item}>
          <span className={css.status}></span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
