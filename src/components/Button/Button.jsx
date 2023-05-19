import PropTypes from 'prop-types';
import { Btn } from './styled';

const Button = ({ onClick}) => {
  return (
    <Btn type="button" onClick={onClick}>
       Load more
    </Btn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;