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
import { Link } from 'react-router-dom';

class Direct_Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      '': '',
    };
  }

  render() {
    const {
      avatar_img_blue,
      avatar_img_red,
      avatar_img_green,
      notification_text,
      sample_thumbnail,
    } = this.props;
    return (
      <section className={styles.direct_message_container}>
        {/* notification */}
        <Card>
          <div>
            <Link to="/direct-message-compose">
              <CardBody className={styles.card_head}>
                <img
                  className={styles.avatar_img}
                  src={avatar_img_blue}
                  alt="user avatar"
                />
                <CardTitle className={styles.notification_text}>
                  {notification_text}
                </CardTitle>

                {/* <img
                className={styles.card_thumb}
                src={sample_thumbnail}
                alt="notification media thumbnail"
              />
              <CardSubtitle>Card subtitle</CardSubtitle> */}
              </CardBody>
            </Link>
            <CardBody className={styles.card_head}>
              <img
                className={styles.avatar_img}
                src={avatar_img_red}
                alt="user avatar"
              />
              <CardTitle className={styles.notification_text}>
                {notification_text}
              </CardTitle>
              {/* <img
                className={styles.card_thumb}
                src={sample_thumbnail}
                alt="notification media thumbnail"
              />
              <CardSubtitle>Card subtitle</CardSubtitle> */}
            </CardBody>
            <CardBody className={styles.card_head}>
              <img
                className={styles.avatar_img}
                src={avatar_img_green}
                alt="user avatar"
              />
              <CardTitle className={styles.notification_text}>
                {notification_text}
              </CardTitle>
              {/* <img
                className={styles.card_thumb}
                src={sample_thumbnail}
                alt="notification media thumbnail"
              />
              <CardSubtitle>Card subtitle</CardSubtitle> */}
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

Direct_Message.propTypes = {
  id: PropTypes.string,
  notification_text: PropTypes.string,
  avatar_img_blue: PropTypes.string,
  sample_thumbnail: PropTypes.string,
  loggedIn: PropTypes.bool,
};

Direct_Message.defaultProps = {
  loggedIn: true,
  notification_text: 'View DM Contacts here!',
  avatar_img_blue: '/avatar_blue.png',
  avatar_img_red: '/avatar_green.png',
  avatar_img_green: '/avatar_red.png',
  sample_thumbnail: '/sample_image.jpg',
};

export default Direct_Message;
