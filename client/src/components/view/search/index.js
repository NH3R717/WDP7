import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Input } from 'reactstrap';
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
                <h4 for="begining_date">Begining Date</h4>
                <Input
                  className={styles.input}
                  type="date"
                  name="begin_date"
                  id="begin_date"
                  placeholder="Begin Date"
                />
              </FormGroup>
              <FormGroup>
                <h4 for="end_date">End Date</h4>
                <Input
                  className={styles.input}
                  type="date"
                  name="end_date"
                  id="end_date"
                  placeholder="End Date"
                />
              </FormGroup>
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
