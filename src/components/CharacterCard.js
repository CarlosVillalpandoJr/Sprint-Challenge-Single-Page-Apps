import React from "react";

export default function CharacterCard( {char} ) {
  return (
    <div className='character-card'>
      <img src={char.image} alt={`${char.name}`} />
      <div className='character-info'>
        <h3>{`${char.name} is a ${char.species}`}</h3>
        <p>{`Current Status: ${char.status}`}</p>
      </div>
    </div>
  );
}
