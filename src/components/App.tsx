import * as React from 'react';
import './App.css';
import PhotoGallery from './PhotoGallery';

const logo = require('./logo.svg');

class App extends React.Component {
    render() {
        return (
            // tslint:disable-next-line:jsx-wrap-multiline
            <div>
                <header className="app-header" key="1">
                    <img src={logo} alt="LOGO" className="app-logo" />
                    My Photos
                </header>
                <PhotoGallery key="2" />
            </div>    
        );
    }
}

export default App;
