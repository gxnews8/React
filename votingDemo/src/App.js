import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    libraries: [
      { votes: 15, libName: 'React'},
      { votes: 12, libName: 'Vue'},
      { votes: 9, libName: 'Angular'},
      { votes: 4, libName: 'Ember'},
    ]
  }

  incrementVote = (Library) => {
    const newLibraries = this.state.libraries.map((libObj) => {
      if(libObj.libName === Library){
        return{
          ...libObj,
          votes: libObj.votes + 1
        }
      }
      return libObj;
    });
    this.setState({
      libraries: newLibraries
    });
  }
  render() {
    const voteTiles = [...this.state.libraries]
    .sort((obj1, obj2){
      if(obj1.votes === obj2.votes){
        return (obj1.votes > obj2.votes) ? -1 : 1;
      }
    })
    .map((libObj) = > {
      return <VoteTile
        key={libObj.libName}
        votes={libObj.votes}
        libraryName={libObj.libName}
        onClick={ this.incrementVote()} />
    })
    return (
      <div className="App">
        <header>
          <h1>Vote Your JS Library</h1>
        </header>
        <VoteTileList />
      </div>
    );
  }
}

const VoteTileList = (props) => {
  return (
    <div className="vote-tile-list">
      <VoteTile votes={15} libraryName={'React'} />
      <VoteTile votes={12} libraryName={'Vue'} />
      <VoteTile votes={9} libraryName={'Angular'} />
      <VoteTile votes={4} libraryName={'Ember'} />
    </div>
  )
}

const VoteTile = (props) => {
  return (
    <div className="vote-tile">
      <p className="vote-count">{props.votes}</p>
      <p className="library-name">{props.libraryName}</p>
      <span className="vote-button" onClick={() => props.onClick(props.libraryName)}>+</span>

    </div>
  )
}

VoteTile.propTypes = {
  votes: React.PropTypes.number.isRequeired,
  libraryName: React.PropTypes.string.isRequeired,
}

export default App;
