import React from 'react';

import Square from './square';

export default class Board extends React.Component {
  render() {
    const arr = [0, 1, 2];
    const board = arr.map(i => {
      return (
        <div key={i} className="board-row">
          {arr.map(j => this.renderSquare((i * 3) + j))}
        </div>
      );
    });
    return (
      <div>
        {board}
      </div>);
  }

  renderSquare(i) {
    const highlight = this.props.highlight;
    const squareClass = highlight.includes(i) ? 'square highlight' : 'square';
    return (
      <Square
        key={i}
        squareClass={squareClass}
        value={this.props.squares[i]}
        onClick={() => this.props.handleClick(i)}
      />);
  }
}
