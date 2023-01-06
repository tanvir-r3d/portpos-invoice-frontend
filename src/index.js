import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import reportWebVitals from './reportWebVitals';
import Dashboard from "./components/Dashboard";
import auth from "./stores/auth";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={auth}>
        <React.StrictMode>
            <BrowserRouter>
                <Dashboard/>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);

reportWebVitals();
