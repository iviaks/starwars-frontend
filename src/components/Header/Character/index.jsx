import React from 'react';
import classnames from 'classnames';

import './style.scss';

export default ({ character, onSelect, selected }) => {
  const image = character.media.filter(e => e.type === 'image')[0];

  return (
    <div
      className={classnames("Character-avatar", { selected })}
      onClick={onSelect}
      style={{
        backgroundImage: `url('${image.src}')`
      }}
    />
  );
};
