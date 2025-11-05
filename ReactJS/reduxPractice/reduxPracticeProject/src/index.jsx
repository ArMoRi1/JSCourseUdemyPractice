import React from 'react'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { legacy_createStore as createStore, bindActionCreators } from 'redux';
import reducer from "./reducer";
import {Provider} from "react-redux";

import App from "./components/App";


const store = createStore(reducer);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>
)



