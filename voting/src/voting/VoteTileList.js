import React, {Component} from 'react';
import VoteTile from './VoteTile';

class VoteTileList extends Component {
    state = {
        libraries: [
            { votes: 50, libName: 'Vue' },
            { votes: 50, libName: 'React' },
            { votes: 50, libName: 'Ember' },
            { votes: 50, libName: 'Angular' },
            { votes: 50, libName: 'Javascript' },
            { votes: 50, libName: 'Jquery' },
            { votes: 50, libName: 'A-Frame' },
            { votes: 50, libName: 'P5JS' },
        ]
    }
    incrementVote = (library) => {
        const newLibraries = this.state.libraries.map((libObj, index) => {
            if ( libObj.libName === library ) {
                if ( libObj.votes > 99 ) {
                    return {
                    ...libObj,
                    votes: 100
                    }
                } else {
                    return {
                    ...libObj,
                    votes: libObj.votes + 1
                    }
                }
            }
            return libObj;
        });
        this.setState({
            libraries: newLibraries
        });
    }
    decrementVote = (library) => {
        const newLibraries = this.state.libraries.map((libObj, index) => {
            if ( libObj.libName === library ) {
                if ( libObj.votes < 1 ) {
                    return {
                    ...libObj,
                    votes: 0
                    }
                } else {
                    return {
                    ...libObj,
                    votes: libObj.votes - 1
                    }
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
                                    inc={ this.incrementVote }
                                    dec={ this.decrementVote }/>
                    });

        return (
            <div className="vote-tile-list">
               {voteTiles}
            </div>
        )
    }
}

export default VoteTileList;
