import React from 'react'
import Controller from './components/Controller'
import Displayer from './components/Displayer'
import Navigator from './components/Navigator'
import Contracts from './components/Contracts'
import store from './configStore'
import {Provider} from 'react-redux'
import { hot } from 'react-hot-loader'

const Root = () => (
  <Provider store={store}>
    <div>    
      <Navigator/>
      <Contracts/>
    </div>
  </Provider>
)
export default hot(module)(Root)