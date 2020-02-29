import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Routes from "./routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from "redux-promise";
import reducers from "./reducers";
import firebase from "./firebase";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

class App extends Component {

  
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Routes />
      </Provider>
    )
  }
}

export default App;