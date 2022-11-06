import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Wrapper } from './App.styled';
import { useEffect } from 'react';

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

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncrement = e => {
//     this.setState(prevState => ({ [e]: prevState[e] + 1 }));
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     let total = 0;
//     total += good + neutral + bad;
//     return total;
//   }

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     return good === 0 ? 0 : Math.round((good / (good + neutral + bad)) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const keys = Object.keys(this.state);

//     return (
//       <Wrapper>
//         <Section title="Please leave fedback">
//           <FeedbackOptions
//             options={keys}
//             onLeaveFeedback={this.handleIncrement}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </Wrapper>
//     );
//   }
// }
