import React, { useState } from 'react';
import { Container, Header, SModal, Userinput, Button } from './styles';

function Modal({changer}) {
  
    const [ username, setUsername ] = useState();

    function handleSubmit(e){
        e.preventDefault();
        if(!username) return;
        changer(username);
    }
    return (
      <Container>
          <SModal>
            <Header>Escolha seu usuário</Header>
            <Userinput onChange={e => setUsername(e.target.value)}/>
            <Button onClick={handleSubmit}>Ok</Button>
          </SModal>
      </Container>
  );
}

export default Modal;