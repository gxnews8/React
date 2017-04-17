import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// class App extends React.Component {
//   state = {
//     count: 50
//   }
//
//   increment = () => {
//     this.setState({ count: this.state.count + 1 })
//     if(this.state.count > 99){
//       this.setState({ count: 100 })
//     }
//   }
//
//   decrement = () => {
//     this.setState({ count: this.state.count - 1 })
//     if(this.state.count < 1){
//       this.setState({ count: 0 })
//     }
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <h1>Count: <span id="counts">{this.state.count}</span></h1>
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>Decrement</button>
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
