import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* material-ui */
import Grid from '@material-ui/core/Grid';

/* core */
import Btn from '../../core/Btn';
import Loader from '../../core/Loader';

/* services */
import { getFollowers } from '../../../services/github';

/* utils */
import { externalLink } from '../../../utils/externalLink';

/* styles */
import './styles.css';

class UserFollowers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.followersData
    };
  }

  componentDidMount() {
    const { user, setFollowersData } = this.props;
    const { data } = this.state;

    if (!data.length) {
      getFollowers(user)
        .then(data => {
          this.setState({
            data
          });
          setFollowersData(data);
        })
        .catch(error => {
          throw error;
        });
    }
  }

  render() {
    const { data } = this.state;

    return data.length ? (
      <Grid
        data-test="userFollowers-container"
        container
        className="userFollowerContainer"
        spacing={16}
      >
        {data.map(userFollower => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={userFollower.id}>
            <div className="userFollowerDataContainer">
              <div className="userFollowerTxtContainer">
                <h3 data-test="userFollowers-name">{userFollower.login}</h3>
                <Btn
                  data-test="userFollowers-btn"
                  onClick={() => externalLink(userFollower.html_url, '_blank')}
                  type="account_circle"
                  txt="VISIT PROFILE"
                />
              </div>
              <img
                data-test="userFollowers-image"
                alt="user follower avatar"
                src={userFollower.avatar_url}
                className="userFollowerAvatar"
              />
            </div>
          </Grid>
        ))}
      </Grid>
    ) : (
      <Loader data-test="userFollowers-loader" />
    );
  }
}

UserFollowers.propTypes = {
  user: PropTypes.string,
  setFollowersData: PropTypes.func
};

export default UserFollowers;
