import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';
import container from './container';

// const notificationClear = {
//   avatar: '',
// };

class NotificationsList extends Component {
  constructor(props) {
    super(props);
    const { fetchNotifications } = props;
    // this.state = { notification };
    // this.state = { notification: notificationClear };
    fetchNotifications();
  }

  render() {
    // const { notifications } = this.props;
    // pull the data from state
    const { notifications } = this.props;
    console.log(
      'notifications index.js ' + 32 + ' ' + JSON.stringify(notifications),
      'notifications index.js ' +
        33 +
        ' ' +
        JSON.stringify(notifications.loadedAt)
    );
    return (
      <section className={styles.card_container}>
        {/* notification */}

        {/* <Container>
          {this.props.notifications.loadedAt > 1
            ? notifications.map((notification) => (
                <Card>
                  <div>
                    <CardBody className={styles.card_head}>
                      <img
                        className={styles.avatar_img}
                        src={notification.avatar}
                        alt="user avatar"
                      />
                      <CardTitle className={styles.notification_text}>
                        {notification.notification_text}
                      </CardTitle>
                      <img
                        className={styles.card_thumb}
                        src={notification.thumbnail}
                        alt="notification media thumbnail"
                      />
                    </CardBody>
                  </div>
                </Card>
              ))
            : null}
        </Container> */}
      </section>
    );
  }
}

NotificationsList.propTypes = {
  // id: PropTypes.string,
  notifications: PropTypes.arrayOf(PropTypes.object),
  fetchNotifications: PropTypes.func.isRequired,
  // createNotifications: PropTypes.func.isRequired,
  // deleteNotifications: PropTypes.func.isRequired,
  // notification_text: PropTypes.string,
  // avatar: PropTypes.string,
  // thumbnail: PropTypes.string,
  loggedIn: PropTypes.bool,
};

NotificationsList.defaultProps = {
  loggedIn: true,
  // notification_text: 'Here is a notification, now you know!',
  // avatar_img_blue: '/avatar_blue.png',
  // avatar_img_red: '/avatar_red.png',
  // avatar_img_green: '/avatar_green.png',
  // sample_thumbnail: '/sample_image.jpg',
  notifications: [],
};

export default container(NotificationsList);
