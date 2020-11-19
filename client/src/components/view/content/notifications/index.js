import React, { Component } from 'react';
import {
  Button,
  Input,
  Card,
  CardBody,
  CardTitle,
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';
import container from './container';

class NotificationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // notificationValue: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateNotification = this.updateNotification.bind(this);
    this.deleteNotification = this.deleteNotification.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  handleInputChange(event) {
    console.log(event.target.value);
    this.setState({
      notificationValue: [event.target.value],
    });
  }

  updateNotification() {
    console.log('this.state.notificationValue: ', this.state.notificationValue);
    this.props.createNotification(this.state.notificationValue);
  }
  deleteNotification() {
    console.log('this.state.notificationValue: ', this.state.notificationValue);
    this.props.createNotification(this.state.notificationValue);
  }

  render() {
    // const { notifications } = this.props;
    // pull the data from state
    const { notifications } = this.props;
    console.log(
      'notifications index.js ' + 32 + ' ' + JSON.stringify(notifications),
      'notifications index.js ' +
        33 +
        ' Stringify ' +
        JSON.stringify(notifications.loadedAt)
    );
    // ! map all notifications
    console.log('Redux State Notifications ', notifications);
    return (
      <section className={styles.card_container}>
        <Container>
          <Card>
            <div>
              <CardBody className={styles.card_head}>
                <CardTitle className={styles.notification_text}>
                  <Button
                    className={styles.direct_message_button}
                    onClick={this.deleteNotification}
                  >
                    Delete
                  </Button>
                  <div className={styles.list}>
      {notifications.map((notification) => (
        <div className={styles.post} key={notifications†.id}>

        </div>
      ))}
    </div>
                  {/* <div className={styles.list}></div> */}
                  <Button
                    className={styles.direct_message_button}
                    onClick={this.updateNotification}
                  >
                    Update
                  </Button>
                </CardTitle>
              </CardBody>
            </div>
          </Card>

          <Input
            className={styles.direct_message_input}
            type="text"
            name="notification_update"
            id="notification_update"
            onChange={this.handleInputChange}
            // placeholder=""
          />
          {/* : null} */}
        </Container>
      </section>
    );
  }
}
NotificationsList.propTypes = {
  id: PropTypes.string,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      userId: PropTypes.string,
      flags: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
      textNotifcations: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          notificationId: PropTypes.string,
          messageText: PropTypes.string,
          createdAt: PropTypes.string,
          updatedAt: PropTypes.string,
        })
      ),
      audios: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          notificationId: PropTypes.string,
          audioLink1: PropTypes.string,
          audioLink2: PropTypes.string,
          createdAt: PropTypes.string,
          updatedAt: PropTypes.string,
        })
      ),
      images: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          notificationId: PropTypes.string,
          imageLink1: PropTypes.string,
          imageLink2: PropTypes.string,
          imageLink3: PropTypes.string,
          createdAt: PropTypes.string,
          updatedAt: PropTypes.string,
        })
      ),
      videos: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          notificationId: PropTypes.string,
          videoLink1: PropTypes.string,
          videoLink2: PropTypes.string,
          createdAt: PropTypes.string,
          updatedAt: PropTypes.string,
        })
      ),
    })
  ),
  fetchNotifications: PropTypes.func.isRequired,
  // createNotifications: PropTypes.func.isRequired,
  // deleteNotifications: PropTypes.func.isRequired,
  // notification_text: PropTypes.string,
  // avatar: PropTypes.string,
  // thumbnail: PropTypes.string,
  loggedIn: PropTypes.bool,
};

NotificationsList.defaultProps = {
  // loggedIn: true,
  // notification_text: 'Here is a notification, now you know!',
  // avatar_img_blue: '/avatar_blue.png',
  // avatar_img_red: '/avatar_red.png',
  // avatar_img_green: '/avatar_green.png',
  // sample_thumbnail: '/sample_image.jpg',
  // notifications: [],
};

export default container(NotificationsList);
