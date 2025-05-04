import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import BootStrapTest from "./BootStrapTest";
import {Button} from './App';
import styled from "styled-components";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const BiGButton = styled(Button)`
    margin: 0 auto;
    width: 245px;
    text-align: center;
    
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BiGButton as="a">Send info</BiGButton>
    <BootStrapTest/>
  </React.StrictMode>
);

