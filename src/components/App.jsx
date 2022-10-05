import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import userData from '../data/user.json';
import statData from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        avatar={userData.avatar}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      <Statistics statData={statData} title={'UPLOAD STATS'} />
      <FriendList friendsData={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
