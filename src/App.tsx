import React from "react";
import { ThemeProvider } from "styled-components";
import { getAppTheme, ResetStyles } from "./theme";
import Header from "./features/header/Header";
import ChatSection from "./features/chat-section/ChatSection";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={getAppTheme()}>
      <ResetStyles />
      <div>
        <Header />
        <ChatSection />
      </div>
    </ThemeProvider>
  );
};

export default App;
