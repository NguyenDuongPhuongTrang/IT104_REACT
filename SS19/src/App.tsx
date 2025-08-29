import React from "react";
import { LanguageProvider } from "./components/Ex9/Context";
import Selector from "./components/Ex9/Selector";
import Greeting from "./components/Ex9/Greeting";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div
        style={{
          background: "#222",
          color: "white",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Selector />
        <Greeting />
      </div>
    </LanguageProvider>
  );
};

export default App;
