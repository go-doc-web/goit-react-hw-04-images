import PropTypes from 'prop-types';

import css from './button.module.scss';

const Button = ({ text, type, onClick }) => {
  return (
    <button onClick={onClick} className={css.button} type={type}>
      {text}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  type: 'submit',
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
