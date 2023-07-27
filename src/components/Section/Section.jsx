import React, { Component } from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={css.container}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
