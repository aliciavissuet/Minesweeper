import React from 'react';
import ReactDOM from 'react-dom';

import Game from './Game';

function Root() {
    return (
        <div>
            <h1>React is working</h1>
            <Game />
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root />, document.getElementById('root'))
})