import { createContext, useState } from "react";
import "antd/dist/antd.min.css";

import FavorAlbum from "./modules/FavorAlbum/FavorAlbum";
import classes from "./App.module.css";
import languages from "./shared/languages";
import LanguageSelect from "./components/LanguageSelect/LanguageSelect";

export const AppContext = createContext();

const App = () => {
  const [language, setLanguage] = useState("eng");

  return (
    <AppContext.Provider value={{ language: languages[language] }}>
      <div className={classes.wrapper}>
        <LanguageSelect onChange={(value) => setLanguage(value)} />
        <FavorAlbum />
      </div>
    </AppContext.Provider>
  );
};

export default App;
