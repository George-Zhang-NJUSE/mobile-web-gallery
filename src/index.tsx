import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

// tslint:disable-next-line:no-empty
document.body.ontouchstart = () => { };  // enable css :active on touch

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
