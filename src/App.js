import React, { Component } from 'react';
import './App.css';

// import CalenderPicker from './component/Datepicker/DatePicker'
import Board from './component/Board/Board';


function calculateWinner(square) {
  const lines = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [1,5,9],
      [3,5,7],
      [1,4,7],
      [2,5,8],
      [3,6,9]
  ];

  for(let i= 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(square[a] && square[a] === square[b] && square[a] === square[c]) {
          return square[a];
      }
  }
  return null;
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      history : [{
        square: Array(9).fill(null),
      }],
      nextPlayer: false
    }
  }
  playerClicked(i) {
    const history = this.state.history;
    const current = history[history.length - 1]
      let square = current.square.slice();
      if(calculateWinner(square) || square[i]){
          return
      }
      square[i] = this.state.nextPlayer? 'O' : 'X';
      let nextPlayer = !this.state.nextPlayer;
      this.setState({
          history: history.concat([{
            square: square
          }]),
          nextPlayer
      })
  }
  render() {
    const history = this.state.history;
    const current = history[history.length - 1]
    const winner = calculateWinner(current.square);
    let status;
    if(winner) {
        status = "Winner : " + winner
    } else {
        status = "Next player : " + (this.state.nextPlayer ? 'O' : 'X');            
    }
    return (
      <div className="App">
       <div>{status}</div>
        <br/>
        <Board square = {current.square} onClick = {(i) => this.playerClicked(i) }/>
      </div>
    );
  }
}

export default App;
