import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import Heart from './components/Heart';
import URLImage from './components/URLImage';
import tshirt from './imgs/tshirt.png';
import Transformer from './components/Transformer';
import Drawing from './components/Drawing';
import BrushOptions from './components/BrushOptions';
import Button from './components/UniversalButton';

class App extends Component {
  state = {
    selectedShapeName: '',
    hearts: [],
    brushColor: '#E0BBE4'
  }

  handleStageMouseDown = e => {
    // clicked on stage - clear selection
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

    // find clicked shape by its name
    const name = e.target.name();
    if (name === `heart${e.target.index}`) {
      this.setState({
        selectedShapeName: name
      });
    } else {
      this.setState({
        selectedShapeName: ''
      });
    }
  };

  handleAddHeart = () => {
    this.setState({
      hearts: [...this.state.hearts, "<3"]
    })
  }

  handleExportClick = () => {
    const dataURL = this.stageRef.getStage().toDataURL();
    this.downloadURI(dataURL, "tshirt.jpg");
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

  handleBrushColorChoice = (e) => {
    this.setState({ brushColor: e.target.value })
  }

  render() {
    return (
      <div>
        <Stage width={600} height={565} ref={node => { this.stageRef = node }} onMouseDown={this.handleStageMouseDown}>
          <Layer>
            <URLImage src={tshirt} ref={node => { this.tshirtRef = node }} />
          </Layer>
          <Layer>
            <Drawing width={600} height={565} color={this.state.brushColor} />
          </Layer>
          <Layer>
            {this.state.hearts.map((el, index) =>
              (<Heart key={index} color={this.state.value} name={`heart${index}`}></Heart>)
            )}
            <Transformer
              selectedShapeName={this.state.selectedShapeName}
            />
          </Layer>
        </Stage>
        <Button onClick={this.handleExportClick} text="Download" />
        <Button onClick={this.handleAddHeart} text="Add heart" />
        <BrushOptions value={this.state.brushColor} onChange={this.handleBrushColorChoice} />
      </div >
    );
  }
}

export default App;