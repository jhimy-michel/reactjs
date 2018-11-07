import React, { Component } from 'react'
import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class Succes extends Component {
    continue = e =>{
        e.preventDefault();
        //process form //
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Success"/>
                <h1>Thank you for your submition!</h1>
                <p>You will get a email with further instructions</p>
            </React.Fragment>
        </MuiThemeProvider>
        );
    }
}