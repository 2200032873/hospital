import React, { Component } from 'react';
import { callApi, errorResponse } from './main';
import './appoint.css';
const space = { height: '10px' };

class Appoint extends Component {
    constructor(props) {
        super(props);
        // Binding the register method to the current instance of Appoint
        this.register = this.register.bind(this);
        // Binding the registerSuccess method to the current instance of Appoint
        this.registerSuccess = this.registerSuccess.bind(this);
    }

    register() {
        var RT1 = document.getElementById('RT1');
        var RT2 = document.getElementById('RT2');
        var RT3 = document.getElementById('RT3');
        var RT4 = document.getElementById('RT4');
        var RT5 = document.getElementById('RT5');
        var RT6 = document.getElementById('RT6');
        var RT7 = document.getElementById('RT7');

        // Checking if any of the elements are null
        if (!RT1 || !RT2 || !RT3 || !RT4 || !RT5 || !RT6 || !RT7) {
            console.error("One or more elements not found in the DOM.");
            return;
        }

        // Your existing validation and API call logic
        // ...

        // Example of calling API function
        var url = "http://localhost:5000/appointment/signup";
        var data = JSON.stringify({
            firstname: RT1.value,
            lastname: RT2.value,
            contactno: RT3.value,
            emailid: RT4.value,
            age: RT5.value,
            weight: RT6.value,
            gender: RT7.value,
        });
        callApi("POST", url, data, this.registerSuccess, errorResponse);

        // Clearing input fields after registration
        RT1.value = "";
        RT2.value = "";
        RT3.value = "";
        RT4.value = "";
        RT5.value = "";
        RT6.value = "";
        RT7.value = "";

        // Example of hiding registration form after successful registration
        var login = document.getElementById('login');
        var registration = document.getElementById('registration');
        registration.style.display = 'none';
        login.style.display = 'block';
    }

    registerSuccess(res) {
        var data = JSON.parse(res);
        alert(data);
    }

    render() {
        return (
            <div className='full-height'>
                <div className='card'>
                    <div>First Name*</div>
                    <div><input type='text' id='RT1' className='txtbox' /></div>
                    <div style={space}></div>
                    <div>Last Name*</div>
                    <div><input type='text' id='RT2' className='txtbox' /></div>
                    <div style={space}></div>
                    <div>Contact Number*</div>
                    <div><input type='text' id='RT3' className='txtbox' /></div>
                    <div style={space}></div>
                    <div>Email ID*</div>
                    <div><input type='text' id='RT4' className='txtbox' /></div>
                    <div style={space}></div>
                    <div>Age*</div>
                    <div><input type='age' id='RT5' className='txtbox' /></div>
                    <div style={space}></div>
                    <div>Weight*</div>
                    <div><input type='text' id='RT6' className='txtbox' /></div>
                    <div style={space}></div>
                    <div>Gender*</div>
                    <div><input type='text' id='RT7' className='txtbox' /></div>
                    <div style={space}></div>
                    <div><button className='btn' onClick={this.register}>Register</button></div>
                </div>
            </div>
        );
    }
}

export default Appoint;
