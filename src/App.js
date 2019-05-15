import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import Portal from './utils/Portal';
import Heart from './components/Heart'

class App extends Component {
  state = {
    value: 'yellow'
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Portal>
            <select
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
                width: '200px'
              }}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option>Yellow</option>
              <option>Red</option>
              <option>Pink</option>
              <option>Orange</option>
              <option>Blueviolet</option>
              <option>Blue</option>
              <option>Green</option>
            </select>
          </Portal>
          <Heart color={this.state.value}></Heart>
        </Layer>
      </Stage>
    );
  }
}

export default App;