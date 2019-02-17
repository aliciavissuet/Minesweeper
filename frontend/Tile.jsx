import React, { Component } from 'react';
import Emoji from './Emoji';

class Tile extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.props.updateGame(this.props.tile, e.altKey);
    }
    render() {
        let klass = 'tile';
        let text = ''
        
        if (this.props.tile.bombed && this.props.tile.explored) {
            text = '💣';
        } else if(this.props.tile.explored) {
            text = this.props.tile.adjacentBombCount();
        }

        if (this.props.tile.flagged) {
            text = '🚩';
        }

        if(this.props.tile.explored) {
            klass += ' explored';
        } 

        return (
            <div className={klass} onClick={this.handleClick}>
                {text}
            </div>
        );
    }
}

export default Tile;