import * as React from 'react';
import './PhotoGallery.css';

export default class PhotoGallery extends React.Component<{ imageUrls: string[] }, { inFullView: boolean }> {

    fullViewCanvas: HTMLCanvasElement;

    constructor() {
        super();
        this.enterFullView = this.enterFullView.bind(this);
        this.state = {
            inFullView: false
        };
    }

    render() {
        return (
            <div>
                <canvas
                    className={'full-view ' + (this.state.inFullView ? 'active' : 'hidden')}
                    ref={(canvas) => { this.fullViewCanvas = canvas as HTMLCanvasElement; }}
                    width={window.innerWidth}
                    height={window.innerHeight}
                />
                {this.props.imageUrls.map((url, index) =>
                    <canvas
                        key={index}
                        className="thumbnail"
                        style={{ backgroundImage: `url(${url})` }}
                        onClick={this.enterFullView}
                    />)}
            </div>
        );
    }

    enterFullView() {
        this.setState(prevSate => ({
            inFullView: !prevSate.inFullView
        }));
    }

}