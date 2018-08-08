import React from 'react';
import './modal.css';
import { Link } from 'react-router-dom';

function Modal(props) {
  return (
    <div className="Modal">
      {props.children}
      <Link
        to={{
          pathname: '/videos',
          state: {
            modal: false
          }
        }}
      >
        <button
          onClick={props.handleClick}
          className="Modal-close"
        />
      </Link>
    </div>
  )
}

export default Modal;
