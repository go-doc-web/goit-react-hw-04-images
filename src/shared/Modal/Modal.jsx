import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import css from './modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ close, children }) => {
  const closeModal = ({ target, currentTarget, code }) => {
    if (currentTarget === target || code === 'Escape') {
      close();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', closeModal);

    return () => document.removeEventListener('keydown', closeModal);
  }, []);

  return createPortal(
    <div onClick={closeModal} className={css.overlay}>
      <div className={css.modal}>
        {/* <span onClick={close} className={css.close}>
          <span>x</span>
        </span> */}
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  close: PropTypes.func.isRequired,
};
