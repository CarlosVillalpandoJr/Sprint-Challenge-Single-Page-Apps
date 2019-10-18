import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [searchField, setSearchField] = useState('')
  const [filteredCharacters, setFilteredCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacters(response.data.results)
        setFilteredCharacters(response.data.results)
      })
      .catch(error => console.log('Server Error', error))
  }, []);

  useEffect(() => {
    setFilteredCharacters(
      characters.filter(character => 
        character.name.toLowerCase().includes(searchField.toLowerCase())
      )
    )
  }, [searchField])

  const handleSearch = event => {
    setSearchField(event.target.value)
  }


  return (
    <section className="character-list">
      <form>
        <input 
        name='search-input'
        id='search-input'
        placeholder='Search Characters'
        value={searchField}
        onChange={handleSearch}
        />
      </form>
      {filteredCharacters.map(char => (
        <CharacterCard char={char} key={char.id} />
      ))}
    </section>
  );
}
