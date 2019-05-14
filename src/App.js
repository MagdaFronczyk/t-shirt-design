import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import URLImage from './components/URLImage';
import Portal from './Portal.js';

class App extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Portal>
            <input type="file"
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
                width: '200px'
              }}
              placeholder="DOM input from Konva nodes"
            />
          </Portal>
          <URLImage src="https://sheldoncorgi.pl/wp-content/uploads/2018/11/Untitled-design-5.png" />
        </Layer>
      </Stage>
    );
  }
}

export default App;