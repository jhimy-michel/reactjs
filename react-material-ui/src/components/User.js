import React, { Component } from 'react'
import UserDetail from './UserDetail';
import PersonalDetail from './PersonalDetail';
import Confirm from './Confirm';
import Succes from './Succes';

export default class User extends Component {
    state = {
        step: 1,
        firstName:'',
        lastName:'',
        email:'',
        ocupation:'',
        city:'',
        bio:''
    }
//proceed to next step
nextStep = () =>{
    const {step} = this.state;
    this.setState({
        step:step+1
    });
}
//go back to prev step
prevStep = () =>{
    const {step} = this.state;
    this.setState({
        step:step-1
    });
}
//handle fields change
handleChange = input =>e=>{
    this.setState({[input]:e.target.value});
}
    render() {
        const  {step} = this.state;
        const {firstName,lastName, email, ocupation, city, bio} = this.state;
        const values = {firstName,lastName, email, ocupation, city, bio};
    switch(step){
        case 1:
        return(
            <UserDetail nextStep={this.nextStep} handleChange={this.handleChange} values={values}></UserDetail>
        );
        case 2:
        return (
            <PersonalDetail nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values}></PersonalDetail>
        );
        case 3: 
        return (
            <Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values}></Confirm>
        );
        case 4: 
        return <Succes></Succes>
    }
    }
}
