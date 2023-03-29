import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bulb: false,
            fan: false
        }
    }
    //function
    bulbToggle = () => {  
            const{bulb} =this.state;
            this.setState({bulb: !bulb}); // setting set 
    
    }

    fanToggle = () => {  
        const{fan} =this.state;
        this.setState({fan: !fan}); // setting set 

}

    render() {
        const{bulb, fan} =this.state;
        return (
            <>

                <div> Toggle </div>
                <div>
                    Bulb: {bulb ? 'On': 'Off'}
                </div>
                <div>
                    Fan: {fan ? 'On': 'Off'}
                </div>
                <div>
                    <button onClick={this.bulbToggle}>Click {bulb ? 'Off': 'On'} Bulb</button>
                    <button onClick={this.fanToggle}>Click {fan ? 'Off': 'On'} Fan</button>
                </div>
            </>
        )
    }
}
export default Toggle;