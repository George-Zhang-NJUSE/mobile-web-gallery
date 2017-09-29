import * as React from 'react';
import './App.css';
import PhotoGallery from './PhotoGallery';

const logo = require('../res/logo.svg');

class App extends React.Component<{}, { imageUrls: string[] }> {

    input: HTMLInputElement;

    constructor() {
        super();
        this.readImages = this.readImages.bind(this);
        this.state = {
            imageUrls: []
        };
    }

    render() {
        return (
            <div>
                <header className="app-header" key="1">
                    <img src={logo} alt="LOGO" className="app-logo" />
                    <span>My Photos</span>
                    <div className="add-photo">
                        <input
                            type="file"
                            accept="image/*"
                            multiple={true}
                            ref={input => { this.input = input as HTMLInputElement; }}
                            onChange={this.readImages}                
                        />
                    </div>
                </header>
                <PhotoGallery imageUrls={this.state.imageUrls}/>
            </div>
        );
    }

    readImages() {
        let fileList = this.input.files;
        let fileArray: File[] = Array.prototype.slice.call(fileList);
        fileArray.forEach(file => {
            let reader = new FileReader();
            reader.onload = () => {
                this.setState((prevState) => ({
                    imageUrls: prevState.imageUrls.concat(reader.result as string)
                }));
            };
            reader.readAsDataURL(file);
        });
    }

}

export default App;
