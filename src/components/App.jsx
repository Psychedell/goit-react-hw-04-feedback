import { useState, useEffect } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Wrapper } from './App.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setbad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const keys = ['good', 'neutral', 'bad'];

  const handleIncrementGood = () => {
    setGood(prevState => prevState + 1);
  };

  const handleIncrementNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };

  const handleIncrementBad = () => {
    setbad(prevState => prevState + 1);
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositivePercentage(good === 0 ? 0 : Math.round((good / total) * 100));
  }, [good, total]);

  return (
    <Wrapper>
      <Section title="Please leave fedback">
        <FeedbackOptions
          options={keys}
          onLeaveGood={handleIncrementGood}
          onLeaveNeutral={handleIncrementNeutral}
          onLeaveBad={handleIncrementBad}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wrapper>
  );
}
