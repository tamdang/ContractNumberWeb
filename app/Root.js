import React from 'react'
import Controller from './components/Controller'
import Displayer from './components/Displayer'
import Navigator from './components/Navigator'
import Contracts from './components/Contracts'
import SimpleModal from './components/SimpleModal'
import store from './configStore'
import {Provider} from 'react-redux'
import { hot } from 'react-hot-loader'

class Root extends React.Component {
  constructor(){
    super()
    this.state = {
      showModal: false
    }
    this.onClose = this.onClose.bind(this)
  }
  onClose(){
    this.setState({showModal:false})
  }
  render(){
    return (
      <Provider store={store}>
        <div>    
          <Navigator/>
          <Contracts/>
          <SimpleModal display={this.state.showModal} onClose={this.onClose}/>
          <button type="button" className="btn btn-primary" onClick={()=>this.setState({showModal: true})}>
            Launch demo modal
          </button>
        </div>
      </Provider>
    )
  }
} 
export default hot(module)(Root)