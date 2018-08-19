import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( 
  <BrowserRouter>
    { routes() }
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
