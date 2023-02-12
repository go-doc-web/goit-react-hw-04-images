import PropTypes from 'prop-types';

// import css from './modal-detalis.module.scss';

const ModalDetalis = ({ imageLarge }) => {
  return (
    <>
      <img src={imageLarge} alt="" />
    </>
  );
};

export default ModalDetalis;

ModalDetalis.propsTypes = {
  imageLarge: PropTypes.string.isRequired,
};
