import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { legacy_createStore as createStore, bindActionCreators } from 'redux';
import './index.css'
import reducer from "./reducer";
import * as actions from './actions'

const store = createStore(reducer);

const update = () => {
    document.getElementById('counter').textContent = getState().value;
}

const {dispatch} = store;
const {subscribe} = store;
const {getState} = store;

subscribe(update);

// const bindActionCreator = (creator, dispatch) =>(...args)=>{
//     dispatch(creator(...args));
// }

const {inc, dec, rnd} = bindActionCreators( actions, dispatch);

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);
document.getElementById('rnd').addEventListener('click', ()=>{
    const value = Math.floor(Math.random() * 10);
    rnd(value);
});






// let state = reducer(initialState, {type: 'INC'});
//  state = reducer(state, {type: 'INC'});
//  state = reducer(state, {type: 'INC'});
//  state = reducer(state, {type: 'INC'});
// console.log(state);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<h1>Hello, Redux!</h1>*/}
  </StrictMode>,
)
