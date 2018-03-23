import React from 'react'
import './style.css'
const ControllerPresentation = (props) => (
  <div>
    <button className="btn btn-sm btn-outline-success m-2" onClick={props.increment}>Increment</button>
    <button className="btn btn-sm btn-outline-danger m-2" onClick={props.decrement}>Decrement</button>
  </div>
)
export default ControllerPresentation