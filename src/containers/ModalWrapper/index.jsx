import React from 'react';
import { createPortal } from 'react-dom';

class ModalWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.modalContainer = document.createElement('div');
    this.modalContainer.className = 'modals';
  }

  componentDidMount() {
    document.body.appendChild(this.modalContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.modalContainer);
  }

  render() {
    return createPortal(
      <React.Fragment>{this.props.children}</React.Fragment>,
      this.modalContainer
    );
  }
}

export default ModalWrapper;
