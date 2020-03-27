import React, { Fragment } from 'react'
import {Provider} from 'react-redux'
import HeaderNav from './components/HeaderNav'
import Photos from './components/Photos'
import store from './store'
import './assets/css/styles.css'

function App() {
  return (
    <Provider store={store}>
    <Fragment>
      <HeaderNav />
      <Photos />
    </Fragment>
  </Provider>
  );
}

export default App;
