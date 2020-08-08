import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { Conteiner, LoginCard, Input, Button } from "./styles";

function StartPage() {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name) {
      alert("Digite um nome");
      return;
    }

    navigate("/chat-name=" + name.trim());
  }
  return (
    <Conteiner>
      <LoginCard onSubmit={handleSubmit}>
        <h1>ChatAPP</h1>
        <Input
          placeholder="Digite seu nome"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button type="submit">Acessar o chat</Button>
      </LoginCard>
    </Conteiner>
  );
}

export default StartPage;
