import React from 'react'
import ReactDOM from 'react-dom'
import Title , { HelloWorld } from './components'

ReactDOM.render(
    <div>
        <Title value="Friend"/>
        <HelloWorld />
    </div>
, document.getElementById('app') )