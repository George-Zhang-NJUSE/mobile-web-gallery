import * as React from 'react';
import './PhotoGallery.css';

export default class PhotoGallery extends React.Component<{}, { photoUrls: string[] }> {

    input: HTMLInputElement;

    constructor() {
        super();
        this.readPhotos = this.readPhotos.bind(this);
        this.state = {
            photoUrls: []
        };
    }

    render() {
        return (
            <div>
                <input
                    type="file"
                    name="file"
                    accept="image/*"
                    multiple={true}
                    ref={input => { this.input = input as HTMLInputElement; }}
                    onChange={this.readPhotos}
                    id="in"
                />
                {this.state.photoUrls.map(url => <img key={url} src={url} className="photo"/>)}
            </div>
        );
    }

    readPhotos() {
        let fileList = this.input.files;
        let fileArray: File[] = Array.prototype.slice.call(fileList);
        fileArray.forEach(f => {
            let reader = new FileReader();
            reader.onload = () => {
                this.setState((prevState) => ({
                    photoUrls: prevState.photoUrls.concat(reader.result as string)
                }));
            };
            reader.readAsDataURL(f);
        });
    }
}