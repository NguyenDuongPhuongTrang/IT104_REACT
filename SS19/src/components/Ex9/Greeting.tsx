import React, { useContext } from "react";
import { LanguageContext } from "./Context";

const Greeting: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <h1>
      {language === "en" ? "Welcome!" : "Xin chào!"}
    </h1>
  );
};

export default Greeting;
