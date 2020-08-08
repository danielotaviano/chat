import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./pages/StartPage";

import ChatPage from "./pages/ChatPage";

import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/chat-name=:name" element={<ChatPage />} />
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
