import PropTypes from 'prop-types';
import { FeedbackOptionsButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onHandleIncrement }) => {
  return options.map(option => {
    return (
      <FeedbackOptionsButton
        key={option}
        type="button"
        name={option}
        onClick={() => onHandleIncrement(option)}
      >
        {option}
      </FeedbackOptionsButton>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onHandleIncrement: PropTypes.func.isRequired,
};
