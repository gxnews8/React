import React, {Component} from 'react';
import VoteTile from './VoteTile';

class VoteTileList extends Component {
    state = {
        libraries: [
            { votes: 12, libName: 'Vue' },
            { votes: 15, libName: 'React' },
            { votes: 4, libName: 'Ember' },
            { votes: 9, libName: 'Angular' },
        ]
    }
    incrementVote = (library) => {
        const newLibraries = this.state.libraries.map((libObj, index) => {
            if ( libObj.libName === library ) {
                return {
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
    sortedVoteObjs(){
        return [ ...this.state.libraries ]
                .sort((obj1, obj2) => {
                    // const diff = obj2.votes - obj1.votes;
                    const diff = (obj1.votes > obj2.votes) ? -1 : 1;
                    return diff
                })
    }
    render(){
        const voteTiles = this.sortedVoteObjs()
                    .map((libObj) => {
                        return <VoteTile
                                    key={libObj.libName}
                                    votes={libObj.votes}
                                    libraryName={libObj.libName}
                                    onClick={ this.incrementVote }/>
                    });

        return (
            <div className="vote-tile-list">
               {voteTiles}
            </div>
        )
    }
}

export default VoteTileList;
