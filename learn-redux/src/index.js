import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';


//STORE -> GLOBALIZED STATE

//ACTION INCREMENT
const increment =()=>{
  return {
    type: 'INCREMENT'
  }
}

//ACTION DECREMENT
const decrement =()=>{
  return {
    type: 'DECREMENT'
  }
}

//REDUCER
const counter=(state=0, action)=>{
  // eslint-disable-next-line default-case
  switch(action.type){
    case "INCREMENT":
      return state+1;
    case "DECREMENT":
      return state-1;
  }
}

let store=createStore(counter)
store.subscribe(()=>console.log(store.getState()))

//DISPATCH
store.dispatch(increment())
store.dispatch(decrement())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

