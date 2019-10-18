import React from "react";
import styled from 'styled-components'

export default function CharacterCard( {char} ) {

  const CharacterCard = styled.div`
  border-radius: 25px;
  padding: 40px;
  margin: 15px;
  box-shadow: 5px 5px;
  background: green;
  width: 100%;
  display: flex;
  `
  const CharacterInfo = styled.div`
  border: 3px solid white;
  padding: 20px;
  margin-left: 10%;
  border-radius: 25px;
  color: white;
  `

  return (
    <CharacterCard>
      <img src={char.image} alt={`${char.name}`} />
      <CharacterInfo>
        <h3>{`${char.name} is a ${char.species}`}</h3>
        <p>{`Current Status: ${char.status}`}</p>
      </CharacterInfo>
    </CharacterCard>
  );
}
