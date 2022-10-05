import PropTypes from 'prop-types';
import { UserName, Label, Avatar, Stats, StatsItems } from './Profile.styled';
import Box from 'components/box';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <Box
      textAlign="center"
      m="15px auto"
      width="300px"
      fontSize="24px"
      color="#1c1e21"
      bg="#e9e9e9"
      boxShadow="0px 0px 100px 10px rgb(120, 111, 111),
    0px 0px 50px 2px rgb(208, 205, 205)"
    >
      <Box>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <p>@{tag}</p>
        <p>{location}</p>
      </Box>

      <Stats>
        <StatsItems>
          <Label>Followers</Label>
          <span>{followers.toLocaleString()}</span>
        </StatsItems>
        <StatsItems>
          <Label>Views</Label>
          <span>{views.toLocaleString()}</span>
        </StatsItems>
        <StatsItems>
          <Label>Likes</Label>
          <span>{likes.toLocaleString()}</span>
        </StatsItems>
      </Stats>
    </Box>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
