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

  const options = Object.keys({ good, neutral, bad });

  const handleIncrement = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setbad(prevState => prevState + 1);
        break;
      default:
        console.log('Invalid fedback type');
    }
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPositivePercentage(good === 0 ? 0 : Math.round((good / total) * 100));
  }, [good, neutral, bad, total]);

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onHandleIncrement={handleIncrement}
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
