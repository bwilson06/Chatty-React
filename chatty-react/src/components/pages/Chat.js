import React, { Component } from 'react';
import Nav from "../sub-components/Nav"

class Chat extends Component {
    componentDidMount(){
        let id = this.props.match.params.room_id
        console.log(id)
    }
    render() {
        return (
            <div>
               <Nav />
            </div>
        );
    }
}

export default Chat;