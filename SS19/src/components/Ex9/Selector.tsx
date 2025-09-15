import React, { useContext } from "react";
import { LanguageContext } from "./Context";

const LanguageSelector: React.FC = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div style={{ marginBottom: "20px" }}>
      🌐 Ngôn ngữ hiện tại:{" "}
      <select value={language} onChange={(e) => changeLanguage(e.target.value as "en" | "vi")}>
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
