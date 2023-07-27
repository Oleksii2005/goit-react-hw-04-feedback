import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
// import handleGoodFeedback from '../App';
// import handleNeutralFeedback from '../App';
// import handleBadFeedback from '../App';

export class FeedbackOptions extends Component {
  render() {
    // const { onLeaveFeedback } = this.props;
    return (
      <div className={css.btns}>
        <button
          className={`${css.btn} ${css.btn_good}`}
          // onClick={() => handleGoodFeedback}
        >
          Good
        </button>
        <button
          className={`${css.btn} ${css.btn_neutral}`}
          // onClick={() => handleNeutralFeedback}
        >
          Neutral
        </button>
        <button
          className={`${css.btn} ${css.btn_bad}`}
          // onClick={() => handleBadFeedback}
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
