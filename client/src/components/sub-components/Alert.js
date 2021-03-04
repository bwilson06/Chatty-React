import React from 'react';
import { Alert } from 'react-bootstrap';

function AlertDismissible(props){
    const errors = props.errors.map((error, index) => {
        return (
        <p key={index}>{error}</p>
        )
    })

    if (props.errors.length > 0) {
        return (
            <Alert variant="danger" onClose={props.clearErrors} dismissible>
              <Alert.Heading>Whoops!</Alert.Heading>
              <div>
              {errors}
              </div> 
            </Alert>
          )
    } else {
        return (
            <></> 
        )
    }
}

export default AlertDismissible;