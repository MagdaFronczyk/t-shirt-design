import React, { Component } from 'react';
import { Path } from 'react-konva';
import Konva from 'konva';

class Heart extends Component {

    state = {
        color: 'pink'
    }

    handleClick = () => {
        this.setState({
            color: Konva.Util.getRandomColor()
        });
    };

    render() {
        const { name } = this.props;
        return (<Path
            x={250}
            y={300}
            scaling={true}
            data={"M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"}
            fill={this.state.color}
            scaleX={4}
            scaleY={4}
            name={name}
            onClick={this.handleClick}
            draggable
        />)
    }
}

export default Heart;