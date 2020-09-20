import React from 'react';
import { Alert } from 'react-bootstrap';

function AlertDismissible(props){
    console.log(props)
    if (props.errors.length === 0) {
    return (
        <></>
    )
    } else {
        return (
            <Alert variant="danger" onClose={props.clearErrors} dismissible>
            <Alert.Heading>Please enter your username.</Alert.Heading>
          </Alert>  
        )
    }
}

export default AlertDismissible;