import React, { Component } from 'react';
import Tile from './Tile';


class Board extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props.board);
    }
   updateGame(tile, altkey){
       this.props.updateGame(tile, altkey);
   }
    render() {
        return (
            <div>
                
                {this.props.board.map((row, i) =>
                    <div className='row' key={i}>
                        {row.map((tile, j) => <Tile key={j} tile={tile} updateGame={this.props.updateGame}/>)}
                    </div>)
                }
                
            </div>
        );
    }
}

export default Board;