import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList'


export default function App() {
  return (
    <main>  
      <Header />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/characters'>Characters</Link>
      </nav>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
    </main>
  );
}
