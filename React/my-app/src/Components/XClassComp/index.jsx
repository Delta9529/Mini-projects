import React, { Component } from "react";

export default class XClassComp extends Component {
    constructor(props){
        super(props);
            this.state = {
                count : 0
            }
        }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    decrement = () => {
        this.setState({count: this.state.count - 1})
    }

    render(){
        return(
            <div className="container">
                <h1>XClassComp</h1>
                <div className="counter">
                    <p>Count: {this.state.count}</p>
                </div>
                <div className="buttons">
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                </div>
            </div>
        )
    }
}