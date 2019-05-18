import React, { Component } from 'react';
import { Path } from 'react-konva';

class Heart extends Component {
    render() {
        const { color, name } = this.props;
        return (<Path
            x={window.innerWidth / 3}
            y={window.innerHeight / 4}
            scaling={true}
            data={"M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"}
            fill={color}
            scaleX={10}
            scaleY={10}
            name={name}
            draggable
        />)
    }
}

export default Heart;