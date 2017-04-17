import React from 'react';
import VoteTileList from './VoteTileList';
import './App.css';

const App = (props) => {
    return (
      <div>
        <header>
            <h1>Vote Your JS Library!</h1>
        </header>
        <VoteTileList />
      </div>
    )
}

export default App