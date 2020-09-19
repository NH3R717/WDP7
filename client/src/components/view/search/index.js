import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Container, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

class Search extends Component {
  render() {
    return (
      <section>
        <Container className={styles.form_container}>
          <div className={styles.form_box}>
            <h2>Search</h2>
            <Form>
              <FormGroup className={styles.form_group}>
                <Input
                  className={styles.input}
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search Term"
                />
              </FormGroup>
              <FormGroup className={styles.form_group}>
                {/* <Label>Begining Date</Label> */}
                <h4>Begining Date</h4>
                <Input
                  className={styles.input}
                  type="date"
                  name="begin_date"
                  id="begin_date"
                  placeholder="Begin Date"
                />
              </FormGroup>
              <FormGroup>
                <h4>End Date</h4>
                <Input
                  className={styles.input}
                  type="date"
                  name="end_date"
                  id="end_date"
                  placeholder="End Date"
                />
              </FormGroup>
              {/* <FormGroup>
              <Input
                className={styles.input}
                type="text"
                name="search"
                id="search"
                placeholder="Search"
              />
            </FormGroup> */}
              {/* <Button className={styles.left_button + ' ' + styles.button}>
                Register
              </Button> */}
              <Button className={styles.right_button + ' ' + styles.button}>
                Search
              </Button>
            </Form>
          </div>
        </Container>
      </section>
    );
  }
}

Search.propTypes = {
  id: PropTypes.string,
};

Search.defaultProps = {
  choice: {},
};

export default Search;
