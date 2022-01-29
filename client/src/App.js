import { useEffect, useState } from "react";
import Modal from "./Modal";
import { socket } from "./socket";
import { Container, Typebar, Typeform, Sendbtn, Messages, Message } from "./styles";
import { IoSendSharp } from "react-icons/io5";

function App() {

  const woop = new Audio("/woop.wav");
  const ourId = socket.id;
  const [ username, setUsername ] = useState();
  const [ message, setMessage ] = useState();
  const [ messages, setMessages ] = useState([]);

  function sendMsg(e){
    e.preventDefault();
    if(!message) return;
    woop.play();
    socket.emit("message", {username, message});
    setMessage("");
  }

  useEffect(()=>{
    socket.on("message", msg =>{
      setMessages(messages => [msg, ...messages]);
    })
    return () => {
      socket.off("message");
    }
  }, [])

  return (
    <div className="App">
      <Container>
        {!username && <Modal changer={setUsername}/>}
        <Messages>
          {messages.map(m => {
            if(m.uid === ourId){
              return(
                <Message className="ours">
                  {m.msg}
                  <br/>
                  <small>{new Date(m.dt).toLocaleTimeString("pt-BR").replace(/(.*)\D\d+/, '$1')}</small>
                </Message>
              )
            }
            else{
              return(
                <Message>
                  {m.username}: {m.msg}
                  <br/>
                  <small>{new Date(m.dt).toLocaleTimeString("pt-BR").replace(/(.*)\D\d+/, '$1')}</small>
                </Message>
              )
            }
          })}
        </Messages>
        <Typeform onSubmit={sendMsg}>
          <Typebar autoComplete="off" type="text" value={message} name="message" onChange={e => setMessage(e.target.value)}/>
          <Sendbtn type="submit"><IoSendSharp/></Sendbtn>
        </Typeform>
      </Container>
    </div>
  );
}

export default App;
