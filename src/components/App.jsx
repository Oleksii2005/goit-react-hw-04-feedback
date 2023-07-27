import { Component } from 'react';
import { FeedbackOptions } from '../components/FeedbackOptions /FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { useState } from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  export function handleGoodFeedback = () => {
    setGood(prev => prev + 1);
  };
  export function handleNeutralFeedback = () => {
    setGood(prev => prev + 1);
  };
  export function handleBadFeedback = () => {
    setGood(prev => prev + 1);
  };
  const countTotalFeedback = () => {};
  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          //   onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {/* {totalFeedback > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Section title="Statistics">
          <p>There is no feedback yet.</p>
        </Section>
      )} */}
    </div>
  );
}
export default App;
