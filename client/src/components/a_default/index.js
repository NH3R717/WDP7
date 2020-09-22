import React from 'react';
import PropsTypes from 'props-types';
import container from './container';

save = (event) => {
  // make sure the form doesn't submit with the browser
  event.preventDefault();
  const {
    createItem,
    updateItem,
    match: {
      params: { id },
    },
  } = this.props;
  const { title, description, type } = this.state;
  if (id) {
    updateItem({ id, title, description, type });
  } else {
    createItem({ title, description, type });
  }

  ClassName.propsTypes = {};

  ClassName.defaultProps = {
    item: [],
    // remove default props
  };
};

export default container(ClassName);
