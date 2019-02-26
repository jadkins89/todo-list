import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import { stores } from './stores';

const Root = (
    <Provider {...stores}>
        <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
