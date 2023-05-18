import PropTypes from 'prop-types';

const ErrorMassage = ({ massage }) => {
  return (
    <div>
      <p>{massage}</p>
    </div>
  );
};

ErrorMassage.propTypes = {
  massage: PropTypes.string.isRequired,
};

export default ErrorMassage;
