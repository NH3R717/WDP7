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
    const { avatar_img_blue, username, discription, bio } = this.props;
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
              <CardTitle className={styles.username}>{username}</CardTitle>
              {/* <img
                className={styles.card_thumb}
                src={sample_thumbnail}
                alt="notification media thumbnail"
              /> */}
              <CardSubtitle>{discription}</CardSubtitle>
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
                {/* <Label>Begining Date</Label> */}
                {/* <h4 for="begining_date">Begining Date</h4> */}
                <Input
                  className={styles.input}
                  type="text"
                  name="discription"
                  id="discription"
                  placeholder="Discription"
                />
              </FormGroup>
              <FormGroup>
                {/* <h4 for="end_date">End Date</h4> */}
                <Input
                  className={styles.input}
                  type="text"
                  name="bio"
                  id="bio"
                  placeholder="Bio"
                />
              </FormGroup>
              <Button className={styles.right_button + ' ' + styles.button}>
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
  username: 'Yoshihide Suga',
  discription: 'Pimeminister of Japan',
  bio:
    'Yoshihide Suga (菅 義偉, Suga Yoshihide, born 6 December 1948) is the current prime minister of Japan. He was the chief cabinet secretary under Prime Minister Shinzo Abe from 2012 to 2020 and minister for internal affairs and communications from 2006 to 2007. ',
  // sample_thumbnail: '/sample_image.jpg',
};

export default Profile;
