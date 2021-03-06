import React, { Component } from 'react';

// COMPONENTS:
import Board from './Board';
// CSS:
import './index.css';

class Game extends Component {
    // Added this because we want to pull history from Board.
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        }
    }

    // 1. Gets the this.state.squares array and makes a copy (important!)
    // 2. Makes it equal 'X' or 'O'.
    // 3. Sets new array with updated 'X' or 'O' from original null value.
    handleClick(i) {
        // History is set by the step number.
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        // Returns early and ignore the click if:
        // 1. someone won
        // 2. if square is filled.
        if (calcWinner(squares) || squares[i]) return;

        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        // This sets the new step number if the user clicked to go back.
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calcWinner(current.squares);

        // Usually you can return tailored HTML tags with map method.
        // In this case we are returning a list of buttons that holds
        // a number value that we can use to jump to an index in history.
        const moves = history.map((step, move) => {
            const desc = move
                ? 'Go to move #' + move
                : 'Go to game start';

            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>
                        {desc}
                    </button>
                </li>
            );
        });

        // Status bar of the game. Who's next or who is the winner.
        let status;
        if (winner) {
            status = `Winner: ${winner}`;
        } else {
            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
        }

        return (
            <div>
                <h1>Play Tic Tac Toe!</h1>
                <div className="game">
                    <div className="game-board">
                        <Board
                            squares={current.squares}
                            onClick={(i) => this.handleClick(i)}
                        />
                    </div>
                    <div className="game-info">
                        <div>{status}</div>
                        <ol>{moves}</ol>
                    </div>
                </div>
            </div>
        );
    }
}

// Helper function that finds out if there is a winner.
function calcWinner(squares) {
    const lines = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [
            a,
            b,
            c,
        ] = lines[i];

        // Asks does square[a] have value? if it does then does the combination evals to true.
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

export default Game;
