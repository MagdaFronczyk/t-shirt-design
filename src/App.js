import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import Heart from './components/Heart';
import URLImage from './components/URLImage';
import tshirt from './imgs/tshirt.png';
import Transformer from './components/Transformer';

class App extends Component {
  state = {
    value: 'yellow',
    selectedShapeName: ''
  }

  handleStageMouseDown = e => {
    // clicked on stage - cler selection
    if (e.target === e.target.getStage()) {
      this.setState({
        selectedShapeName: ''
      });
      return;
    }
    // clicked on transformer - do nothing
    const clickedOnTransformer =
      e.target.getParent().className === 'Transformer';
    if (clickedOnTransformer) {
      return;
    }

    // find clicked rect by its name
    const name = e.target.name();
    console.log(name)

    if (name === 'heart') {
      this.setState({
        selectedShapeName: name
      });
    } else {
      this.setState({
        selectedShapeName: ''
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleExportClick = () => {
    const dataURL = this.stageRef.getStage().toDataURL();
    this.downloadURI(dataURL, "stage1.jpg");
  }

  downloadURI(uri, name) {
    const link = window.document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    //delete link;
  }

  render() {
    return (
      <div>
        <select
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            width: '200px',
            zIndex: '1'
          }}
          value={this.state.value}
          onChange={this.handleChange}>
          <option>Yellow</option>
          <option>Red</option>
          <option>Pink</option>
          <option>Orange</option>
          <option>Blueviolet</option>
          <option>Blue</option>
          <option>Green</option>
        </select>
        <Stage width={600} height={565} ref={node => { this.stageRef = node }} onMouseDown={this.handleStageMouseDown}>
          <Layer>
            <URLImage src={tshirt} />
            <Heart color={this.state.value} name='heart'></Heart>
            <Transformer
              selectedShapeName={this.state.selectedShapeName}
            />
          </Layer>
        </Stage>
        <button style={{
          position: 'absolute',
          top: 40,
          left: 10,
          width: '200px'
        }} onClick={this.handleExportClick}>Download</button>
      </div>
    );
  }
}

export default App;