import { Component } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import css from './modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (currentTarget === target || code === 'Escape') {
      this.props.close();
    }
  };
  render() {
    const { children } = this.props;
    const { closeModal } = this;
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
  }
}
export default Modal;

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  close: PropTypes.func.isRequired,
};
