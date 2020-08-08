import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// /*// REDUX
// import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/store/index';
//*/

// STYLES
import './index.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
