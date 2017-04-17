import React, { PropTypes } from 'react';

const VoteTile = (props) => {
    const handleClick = () => {
        props.onClick(props.libraryName)
    }
    return (
        <div className="vote-tile">
            <p className="vote-count">{props.votes}</p>
            <p className="library-name">{props.libraryName}</p>
            <span className="vote-button" onClick={handleClick}>+</span>
        </div>
    )
}

VoteTile.propTypes = {
    votes: PropTypes.number.isRequired,
    libraryName: PropTypes.string.isRequired,
}

export default VoteTile;
