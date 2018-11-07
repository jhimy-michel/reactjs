import React, { Component } from 'react'
import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class PersonalDetail extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {values, handleChange} = this.props;
        return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter Personal Detail"/>
                <TextField hintText="Enter your Ocupation" floatingLabelText="Occupation" onChange={handleChange('ocupation')} defaultValue={values.ocupation}/><br/>
                <TextField hintText="Enter your City" floatingLabelText="City" onChange={handleChange('city')} defaultValue={values.city}/><br/>
                <TextField hintText="Enter your Bio" floatingLabelText="Bio" onChange={handleChange('bio')} defaultValue={values.bio}/><br/>
                <RaisedButton label="Continue" primary={true} style={styles.button} onClick={this.continue}/>
                <RaisedButton label="Back" primary={true} style={styles.button} onClick={this.back}/>
            </React.Fragment>
        </MuiThemeProvider>
        );
    }
}
const styles = {
    button:{
        margin:15
    }
}
