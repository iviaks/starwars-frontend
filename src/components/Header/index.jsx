import React from 'react';

import Character from './Character';

import './style.scss';

export default ({
  characters = [],
  onSelect,
  selectedCharacter,
  selectedMovie
}) => (
  <div className="Header">
    <div className="Header-sorting">
      <div className="Header-sorting-button selected">Release date</div>
      <div className="Header-sorting-button">Chronological order</div>
    </div>
    <div className="Header-logo" />
    <div className="Header-characters">
      {characters.map(character => (
        <Character
          onSelect={() => {
            if (
              selectedCharacter === null ||
              selectedCharacter !== character.id
            ) {
              onSelect(character.id);
            } else if (selectedCharacter === character.id) {
              onSelect(null);
            }
          }}
          selected={
            selectedCharacter === null || character.id === selectedCharacter
          }
          key={character.id}
          character={character}
        />
      ))}
    </div>
  </div>
);
