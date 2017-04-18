import React, { PropTypes } from 'react';

const VoteTile = (props) => {
    const incrementVote = () => {
        props.inc(props.libraryName)
    }
    const decrementVote = () => {
        props.dec(props.libraryName)
    }
    return (
        <div className="vote-tile">
            <button className="vote-count">{props.votes}</button>
            <h1 className="library-name">{props.libraryName}</h1>
            <button className="vote-button" onClick={ incrementVote }>+</button>
            <button className="vote-button" onClick={ decrementVote }>-</button>
        </div>
    )
}

VoteTile.propTypes = {
    votes: PropTypes.number.isRequired,
    libraryName: PropTypes.string.isRequired,
}

export default VoteTile;
