import React, { Component } from "react";
import { Container, Button, InputGroup, FormControl } from "react-bootstrap";
import Nav from "../sub-components/Nav";
import ChatContainer from "../sub-components/ChatContainer";
import "../Main.css";
import axios from "axios";
import io from "socket.io-client";

class Chat extends Component {
  constructor(props){
    super(props);
    this.state = {
    message: "",
    chats: [],
  };

  this.socket = io.connect('http://localhost:3001');

  this.socket.on('message', (message) => {
    if (this.state.chats.length > 0){
    this.setState({ chats: [...this.state.chats, message]} )
    }
  })

  this.handleChange = (event) => {
    event.preventDefault();
    this.setState({ message: event.target.value });
  };

  this.handleSubmit = (event) => {
         event.preventDefault();
         let newChat = {
           username: this.props.match.params.username,
           message: this.state.message
         }
         this.socket.emit('message', newChat)
         var chat = {
           username: this.props.match.params.username,
           message: this.state.message,
           code: this.props.match.params.room_id,
         };
    
         axios
           .post("/chat", chat)
           .then((response) => {
             if (response) {
               this.setState({message: ''})
             }
           })
           .catch((error) => {
             console.log(error);
           });
       };
 }

 componentDidMount(){
  axios.get(`/chat/${this.props.match.params.room_id}`).then((response) => {
          if (response.data.chats.length > 0) {
            console.log(response.data.chats.length)
             this.setState({ chats: response.data.chats })
           }else{
             this.setState({ chats: [{username: 'Chatty', message: 'Say hello!'}]})
           }
         });
 }
  render() {
    return (
      <div>
        <Nav />
        <Container>
          <div className="chatbox">
            <ChatContainer className="chat-container" messages={this.state.chats} />
          </div>
          <InputGroup>
            <FormControl
              placeholder="Enter your message"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={this.state.message}
              onChange={(event) => this.handleChange(event)}
            />
            <InputGroup.Append>
              <Button variant="primary" className="send" onClick={this.handleSubmit}>
                Send
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Container>
      </div>
    );
  }
}

export default Chat;
// import React, { useState, useEffect } from "react";
// import { Container, Button, InputGroup, FormControl } from "react-bootstrap";
// import Nav from "../sub-components/Nav";
// import ChatContainer from "../sub-components/ChatContainer";
// import "../Main.css";
// import axios from "axios";
// import io from "socket.io-client";

// const socket = io.connect('http://localhost:3001');

// const Chat = (props) => {
//   const [message, setMessage] = useState("");
//   const [chats, setChat] = useState([]);
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     axios.get(`/chat/${props.match.params.room_id}`).then((response) => {
//       if (response) {
//         setChat(response.data.chats)
//       }
//     });
//   }, []);

//   const handleChange = (event) => {
//     event.preventDefault();
//     setMessage(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let newChat = {
//       username: props.match.params.username,
//       message: message
//     }
//     socket.emit('message', newChat)
//     var chat = {
//       username: props.match.params.username,
//       message: message,
//       code: props.match.params.room_id,
//     };

//     axios
//       .post("/chat", chat)
//       .then((response) => {
//         if (response) {
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <Nav />
//       <Container>
//         <div className="chatbox">
//           <ChatContainer className="chat-container" messages={chats} />
//         </div>
//         <InputGroup>
//           <FormControl
//             placeholder="Enter your message"
//             aria-label="Recipient's username"
//             aria-describedby="basic-addon2"
//             onChange={(event) => handleChange(event)}
//           />
//           <InputGroup.Append>
//             <Button variant="primary" className="send" onClick={handleSubmit}>
//               Send
//             </Button>
//           </InputGroup.Append>
//         </InputGroup>
//       </Container>
//     </div>
//   );
// };

// export default Chat;
