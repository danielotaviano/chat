import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import socketIOClient from "socket.io-client";

import {
  Container,
  LeftSide,
  RightSide,
  RecentsUsers,
  OnlineIcon,
  ChatScreen,
  ChatForm,
  Input,
  Button,
  SendIcon,
  SelfMessage,
  OtherMessage,
  User,
  Content,
} from "./styles";

function ChatPage() {
  const { name } = useParams();
  const [inputMessage, setInputMessage] = useState("");
  const [selfId, setSelfId] = useState("");
  const [users, setUsers] = useState([
    {
      user: name,
      user_id: "",
    },
  ]);
  const [messages, setMessages] = useState([
    {
      author: "",
      message: "",
      user_id: "",
    },
  ]);

  useEffect(() => {
    const io = socketIOClient("ws://chatappdanielo.herokuapp.com:3001");
    io.on("connect", () => {
      io.emit("newUser", { name });
      io.on("newUsers", (data: []) => {
        setUsers(data);
      });

      io.on("selfId", (data: string) => {
        setSelfId(data);
      });
      io.on("newMessage", (data: []) => {
        console.log(data);
        setMessages(data);
      });
    });
  }, []);

  function sendSelfMessages(e: React.FormEvent) {
    const io = socketIOClient("ws://chatappdanielo.herokuapp.com:3001");
    e.preventDefault();

    inputMessage &&
      io.emit("newMessage", {
        author: name,
        message: inputMessage,
        user_id: selfId,
      });

    setInputMessage("");
  }

  return (
    <Container>
      <LeftSide>
        <h1>Users</h1>
        <h2>Recentes</h2>
        {users.map((user) => {
          return (
            <RecentsUsers>
              <OnlineIcon /> {user.user}
            </RecentsUsers>
          );
        })}
      </LeftSide>

      <RightSide>
        <ChatScreen>
          {messages.map((message, index) => {
            if (!message.message) {
              return;
            }
            if (message.user_id === selfId) {
              return (
                <SelfMessage>
                  <Content>{message.message}</Content>
                  <User>{message.author}</User>
                </SelfMessage>
              );
            }
            return (
              <OtherMessage>
                <Content>{message.message}</Content>
                <User>{message.author}</User>
              </OtherMessage>
            );
          })}
        </ChatScreen>
        <ChatForm onSubmit={sendSelfMessages}>
          <Input
            placeholder="Digite sua mensagem..."
            value={inputMessage}
            onChange={(e) => {
              setInputMessage(e.target.value);
            }}
          />
          <Button>
            <SendIcon />
          </Button>
        </ChatForm>
      </RightSide>
    </Container>
  );
}

export default ChatPage;
