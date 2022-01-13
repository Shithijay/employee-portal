import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
//import { loadEmployees } from './actions/action-creators';

//const store = createStore(rootReducer);
// console.log(store.getState());

const store = createStore(rootReducer,composeWithDevTools(
  applyMiddleware(thunk))
);

// let sampledata = [
//   { LocationId: 'MUM', Name: 'ABC', Age: '30', Department: 'DEPT1', Designation: 'DESIG1', Location: 'Mumbai', EmpCode: 'E101' },
//   { LocationId: 'MUM', Name: 'XYZ', Age: '30', Department: 'DEPT2', Designation: 'DESIG2', Location: 'Mumbai', EmpCode: 'E102' }
// ]

// store.dispatch(loadEmployees(sampledata));

// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
