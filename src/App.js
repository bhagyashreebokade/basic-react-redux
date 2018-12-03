import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import appReducer from './reducers/AppReducer';
import {createStore} from 'redux';

var store = createStore(appReducer);

const rootEl = document.getElementById("root");

const App = () => {
  ReactDOM.render(
      <div className="App">
        Hello World!!{store.getState() ? store.getState().value : "blah"}<br/>
        <button onClick={()=>store.dispatch({type:'click'})}>Click Me!</button>
      </div>,rootEl
  );
};

App();
store.subscribe(App);