import React, { Component } from "react";
import { Image } from "react-konva";

class Drawing extends Component {
    state = {
        isDrawing: false,
    };

    componentDidMount() {
        const canvas = document.createElement("canvas");
        canvas.width = 600;
        canvas.height = 565;
        const context = canvas.getContext("2d");
        this.setState({ canvas, context });
    }

    handleMouseDown = () => {
        this.setState({ isDrawing: true });
        const stage = this.image.getStage();
        this.lastPointerPosition = stage.getPointerPosition();
    };

    handleMouseUp = () => {
        this.setState({ isDrawing: false });
    };

    handleMouseMove = ({ evt }) => {
        const { context, isDrawing } = this.state;

        if (isDrawing) {
            context.strokeStyle = "#df4b26";
            context.lineJoin = "round";
            context.lineWidth = 5;

            if (evt.buttons === 1) {
                // draw
                context.globalCompositeOperation = "source-over";
            } else if (evt.buttons === 2) {
                // erase
                context.globalCompositeOperation = "destination-out";
            }
            context.beginPath();

            var localPos = {
                x: this.lastPointerPosition.x - this.image.x(),
                y: this.lastPointerPosition.y - this.image.y()
            };
            context.moveTo(localPos.x, localPos.y);

            const stage = this.image.getStage();

            var pos = stage.getPointerPosition();
            localPos = {
                x: pos.x - this.image.x(),
                y: pos.y - this.image.y()
            };
            context.lineTo(localPos.x, localPos.y);
            context.closePath();
            context.stroke();
            this.lastPointerPosition = pos;
            this.image.getLayer().draw();
        }
    };

    render() {
        const { canvas } = this.state;
        const { x, y } = this.props;
        return (
            <Image
                image={canvas}
                ref={node => (this.image = node)}
                width={600}
                height={565}
                x={x}
                y={y}
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
                onMouseMove={this.handleMouseMove}
            />
        );
    }
}

export default Drawing;