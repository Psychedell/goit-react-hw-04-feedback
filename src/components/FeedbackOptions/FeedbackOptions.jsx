import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  onLeaveGood,
  onLeaveNeutral,
  onLeaveBad,
}) => {
  return (
    <>
      <button
        key="good"
        type="button"
        name="good"
        onClick={() => onLeaveGood()}
        style={{
          margin: 10,
          cursor: 'pointer',
          borderRadius: 5,
          background: 'silver',
          padding: 4,
          textTransform: 'capitalize',
        }}
      >
        Good
      </button>
      <button
        key="neutral"
        type="button"
        name="good"
        onClick={() => onLeaveNeutral()}
        style={{
          margin: 10,
          cursor: 'pointer',
          borderRadius: 5,
          background: 'silver',
          padding: 4,
          textTransform: 'capitalize',
        }}
      >
        Neutral
      </button>
      <button
        key="bad"
        type="button"
        name="good"
        onClick={() => onLeaveBad()}
        style={{
          margin: 10,
          cursor: 'pointer',
          borderRadius: 5,
          background: 'silver',
          padding: 4,
          textTransform: 'capitalize',
        }}
      >
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
