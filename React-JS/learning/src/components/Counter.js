import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        // declaring state
        // state should be in constructor
        this.state = {
            count: 0
        }

    }
    // function
    handleCount = () => {
        const { count } = this.state;  // destructuring object of state
        this.setState({ count: count + 1 });  // setting set of count
    }

    handleReset = () => {

        this.setState({ count: 0 });  // setting state
    }

    //render
    render() {

        const { count } = this.state;  // destructuring object of state
        return (
            <>
                <h1>Counter</h1>
                <div>
                    Count:{count}
                </div>
                <div>
                    <button onClick={this.handleCount}>Click</button> {/* Onclick element for incresing count */}
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            </>
        )

    }

}

export default Counter;

