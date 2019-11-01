import React, { Component } from 'react'
import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export default class Confirm extends Component {
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
        const {values:{firstName, lastName, email, ocupation,city,bio}} = this.props;
        return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Confirm User Data"/>
                <List>
                    <ListItem primaryText="First Name" secondaryText={firstName}></ListItem>
                    <ListItem primaryText="Last Name" secondaryText={lastName}></ListItem>
                    <ListItem primaryText="Email" secondaryText={email}></ListItem>
                    <ListItem primaryText="Occupation" secondaryText={ocupation}></ListItem>
                    <ListItem primaryText="City" secondaryText={city}></ListItem>
                    <ListItem primaryText="Bio" secondaryText={bio}></ListItem>
                </List>
                <RaisedButton label="Confirm & Continue" primary={true} style={styles.button} onClick={this.continue}/>
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