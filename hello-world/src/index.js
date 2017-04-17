import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// user
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Coding',
  lastName: 'Dojo'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('user')
);
// app
const tileDesriptions = [
    { id:1, color: 'blue', background: 'darkBlue'},
    { id:2, color: 'brown', background: 'pink'},
    { id:3, color: 'aquamarine', background: 'yellow'},
    { id:4, color: 'red', background: 'green'}
]

const app = (props) => {
    const tiles = props.tiles.map(({color, background, id}) => {
        return (
            <Tile key={id} color={color} background={background}/>
        )
    })
    return <div>{tiles}</div>
}

const Tile = (props) => {
    const textColor = props.color;
    const backgroundColor = props.background;
    const style = {
        height: 150,
        width: 150,
        display: 'inline-block',
        backgroundColor,
        color: textColor
    }
    return React.createElement('div', { style }, `${textColor} on ${backgroundColor}`);
}

ReactDOM.render( React.createElement(<app tiles={tileDesriptions} />), document.getElementById("app"));
