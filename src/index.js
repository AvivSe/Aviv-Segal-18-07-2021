import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider as StoreProvider} from "react-redux";
import store from "./store";

ReactDOM.render(
    <StoreProvider store={store}>
        <App/>
    </StoreProvider>,
    document.getElementById('root')
);
