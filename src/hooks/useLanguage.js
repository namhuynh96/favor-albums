import { useContext } from "react";

import { AppContext } from "../App";

const useLanguage = () => {
  const { language } = useContext(AppContext);

  return language;
};

export default useLanguage;
