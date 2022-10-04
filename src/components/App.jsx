import { Profile } from './Profile/Profile';
import { StatisticsCard } from './Statistics/Statistics';
import userData from 'user.json';
import statData from 'data.json';

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
      <StatisticsCard statData={statData} />
    </>
  );
};
