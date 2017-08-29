import React, { Component} from 'react'

export default class extends Component {

    constructor(props){
        super(props)
        this.state = {value: props.initialValue}
    }

    increment(delta){
        this.setState({value : this.state.value + delta})
    }
    decrement(delta){
        this.setState({value : this.state.value - delta})
    }

    render(){
        return (
            <div>
                <h2>{this.props.name} </h2>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.increment(1)}>+</button>
                <button onClick={() => this.decrement(1)}>-</button>
            </div>
            
        )
    }
}