import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <div className={css.btns}>
        <button
          className={`${css.btn} ${css.btn_good}`}
          onClick={() => onLeaveFeedback('good')}
        >
          Good
        </button>
        <button
          className={`${css.btn} ${css.btn_neutral}`}
          onClick={() => onLeaveFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          className={`${css.btn} ${css.btn_bad}`}
          onClick={() => onLeaveFeedback('bad')}
        >
          Bad
        </button>
      </div>
    );
  }
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
