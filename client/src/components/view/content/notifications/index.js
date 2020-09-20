import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  // CardSubtitle,
  // CardText,
  // CardLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

class Notifications_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      '': '',
    };
  }

  render() {
    const { avatar_img_blue, notification_text, sample_thumbnail } = this.props;
    return (
      <section className={styles.card_container}>
        {/* notification */}
        <Card>
          <div>
            <CardBody className={styles.card_head}>
              <img
                className={styles.avatar_img}
                src={avatar_img_blue}
                alt="user avatar"
              />
              <CardTitle className={styles.notification_text}>
                {notification_text}
              </CardTitle>
              <img
                className={styles.card_thumb}
                src={sample_thumbnail}
                alt="notification media thumbnail"
              />
              {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
            </CardBody>
          </div>
          {/* <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody> */}
        </Card>
      </section>
    );
  }
}

Notifications_List.propTypes = {
  id: PropTypes.string,
  notification_text: PropTypes.string,
  avatar_img_blue: PropTypes.string,
  sample_thumbnail: PropTypes.string,
  loggedIn: PropTypes.bool,
};

Notifications_List.defaultProps = {
  loggedIn: true,
  notification_text: 'Here is a notification, now you know!',
  avatar_img_blue: '/avatar_blue.png',
  sample_thumbnail: '/sample_image.jpg',
};

export default Notifications_List;
