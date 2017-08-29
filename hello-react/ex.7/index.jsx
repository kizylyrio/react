import React from 'react'
import ReactDOM from 'react-dom'
import Component  from './component'

ReactDOM.render(
    <Component name="Increment/Decrement Component" initialValue={0}/>
, document.getElementById('app') )