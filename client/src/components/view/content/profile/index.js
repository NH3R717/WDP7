import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  // CardLink,
  Container,
  Button,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      '': '',
    };
  }

  render() {
    const { avatar_img_blue, username, description, bio } = this.props;
    return (
      <section className={styles.card_container}>
        {/* profile */}

        <Card>
          <div>
            <CardBody className={styles.card_head}>
              <img
                className={styles.avatar_img}
                src={avatar_img_blue}
                alt="user avatar"
              />
              <CardTitle className={styles.username}>{username}</CardTitle>
              {/* <img
                className={styles.card_thumb}
                src={sample_thumbnail}
                alt="notification media thumbnail"
              /> */}
              <CardSubtitle>{description}</CardSubtitle>
            </CardBody>
          </div>
          <CardBody className={styles.user_bio_container}>
            <CardText className={styles.user_bio}>{bio}</CardText>
          </CardBody>
        </Card>

        {/* profile form */}

        <Container className={styles.form_container}>
          <div className={styles.form_box}>
            <h2>Profile</h2>
            <Form>
              <FormGroup className={styles.form_group}>
                <Input
                  className={styles.input}
                  type="text"
                  name="Name"
                  id="name"
                  placeholder="Name"
                />
              </FormGroup>
              <FormGroup className={styles.form_group}>
                <Input
                  className={styles.input}
                  type="text"
                  name="description"
                  id="description"
                  placeholder="description"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  className={styles.input}
                  type="text"
                  name="bio"
                  id="bio"
                  placeholder="Bio"
                />
              </FormGroup>
              <Button
                className={
                  styles.right_button + ' ' + styles.direct_message_button
                }
              >
                Update
              </Button>
            </Form>
          </div>
        </Container>
      </section>
    );
  }
}

Profile.propTypes = {
  id: PropTypes.string,
  username: PropTypes.string,
  avatar_img_blue: PropTypes.string,
  sample_thumbnail: PropTypes.string,
  loggedIn: PropTypes.bool,
};

Profile.defaultProps = {
  loggedIn: true,
  avatar_img_blue: '/avatar_blue.png',
  username: 'Jimmy Suga',
  description: 'Company Owner',
  bio:
    'Cu vero semper sed, tempor definitionem vel ut. Velit fierent facilisis ex sea, at his option nusquam maiestatis, sint nullam consectetuer ne vix. Ut iuvaret deterruisset cum, nemore causae ei pro. In qui quod nemore bonorum, nam offendit qualisque adolescens eu, vix et utroque senserit referrentur. Cum eros ferri ut, eum causae veritus in, quo et ignota blandit.',
  // sample_thumbnail: '/sample_image.jpg',
};

export default Profile;
