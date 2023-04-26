import React, { Component } from 'react';
import './form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: '',
                email: '',
                phone: '',
                password: '',
        
            }
        }
    }

    handleForm = (key, value) => {
        if (!value) {
            console.log('Validation logic')
            return;

        }

        if (key === 'phone' && value.length !== 10) {
            console.log('Validation logic')
            return;
        }

        if (key === 'password' && value.length !== 8) {
            console.log('Validation logic')
            return;
        }

        let { form } = this.state;
        form[key] = value;
        this.setState({ form });
        console.log({ form })
    }

    handleSubmit = (event) => {
        event.preventDefault(); // prevent default form submission behavior
        console.log('Form submitted'); // perform additional logic here
        console.log(this.state.form);
      }
    

    render() {
        return (
            <>
                <div className='container'>
                    <form onSubmit={this.handleSubmit}>
                        <div style={{display:"flex", justifyContent:"space-evenly"}}>
                            <img className='logo' src='https://static.india.com/wp-content/uploads/2021/11/Instagram-Logo.jpg' alt='logo' />
                            {/* <h1 className='heading-label'>Instagram</h1> */}
                        </div>
                        {/* <label for="">Name</label> */}
                        <input type="text" name="" placeholder='Enter Name' onChange={(e) => this.handleForm('name', e.target.value)} />
                        {/* <label for="">E-mail Id</label> */}
                        <input type="text" name="" placeholder='Enter Email' onChange={(e) => this.handleForm('email', e.target.value)} />
                        {/* <label for="">Phone number</label> */}
                        <input type="number" name="" placeholder='Enter Mobile number' onChange={(e) => this.handleForm('phone', e.target.value)} />
                        {/* <label for="">Password</label> */}
                        <input type="password" name="" placeholder='Enter Password' onChange={(e) => this.handleForm('password', e.target.value)} />
                        <input type="submit" value="Sign up" />
                    </form>
                </div>
            </>
        )
    }
}
export default Form;