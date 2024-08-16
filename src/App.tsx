import ChatSection from "@features/chat-section/ChatSection";
import Header from "@features/header/Header";
import React from "react";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ChatSection />
    </div>
  );
};

export default App;
