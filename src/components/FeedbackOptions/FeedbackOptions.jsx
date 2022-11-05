import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      key={option}
      type="button"
      name={option}
      onClick={() => onLeaveFeedback(option)}
      style={{
        margin: 10,
        cursor: 'pointer',
        borderRadius: 5,
        background: 'silver',
        padding: 4,
        textTransform: 'capitalize',
      }}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
