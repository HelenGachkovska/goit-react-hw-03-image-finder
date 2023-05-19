import PropTypes from 'prop-types';
import { Text } from './styled';

const ErrorMassage = ({ massage }) => {
  return (
    <div>
      <Text>{massage}</Text>
    </div>
  );
};

ErrorMassage.propTypes = {
  massage: PropTypes.string.isRequired,
};

export default ErrorMassage;
