import React from 'react';
import ModalWrapper from 'containers/ModalWrapper';

import PlayImage from './play.svg';

import './style.scss';

export default () => (
  <ModalWrapper>
    <div className="MovieDetails-Modal">
      <div className="MovieDetails">
        <div className="MovieDetails-header">
          <img src={PlayImage} alt="Play button" className="MovieDetails-header-play" />
        </div>
        <div className="MovieDetails-description"></div>
        <div className="MovieDetails-cast"></div>
      </div>
    </div>
  </ModalWrapper>
);
