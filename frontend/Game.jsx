import React, { Component } from 'react';
import MinesweeperBoard from '../minesweeper';
import MinesweeperTile from '../minesweeper';
import Board from './Board';
class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            board: new MinesweeperBoard(10, 10)
        };
        this.updateGame = this.updateGame.bind(this);
        this.newGame = this.newGame.bind(this);
    }
    updateGame(tile, altkey){
        if (altkey) {
            tile.toggleFlag();
            this.setState({board: tile.board});
        } else {
            tile.explore();
            this.setState({board: tile.board});
        }
    }
    newGame(){
        this.setState({board: new MinesweeperBoard(10, 15)});
    }
    componentDidMount(){
        console.log(this.state.board);
    }
    render() {
        let gameovertext = '';
        if (this.state.board.lost()) {
            gameovertext = 'Sorry - you did not win';
        } else if(this.state.board.won()) {
            gameovertext = 'YOU WON!!';
        }
        

        return (
            <div>
                
                <div>{gameovertext}</div>
                <button onClick={this.newGame}>New Game</button>
                <Board board={this.state.board.grid} updateGame={this.updateGame}/>
            </div>

        );
    }
}

export default Game;