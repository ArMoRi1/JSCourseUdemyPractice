import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Header} from "./App";

const text = 'buga-buga';
const elem = (
    <div>
        <h2>text : {text} {2+2}</h2>
        {/*<h2>date : {new Date()}</h2>*/}
        <input className="inputClass" tabIndex={1} type="text" />
        <label htmlFor=""></label>
        <button tabIndex={2}>button</button>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Header/>,
    <App/>,
    // document.getElementById('root')
);

