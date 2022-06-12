import useLanguage from "../../../hooks/useLanguage";
import Selection from "../Selection/Selection";
import classes from "./LanguageSelect.module.css";

const LanguageSelect = ({ onChange }) => {
  const { languageSelection } = useLanguage();
  return (
    <div className={classes.wrapper}>
      <div>{languageSelection}:</div>
      <div className={classes.select}>
        <Selection
          options={[
            { value: "eng", children: "ENG" },
            { value: "vie", children: "VIE" },
          ]}
          defaultValue="eng"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default LanguageSelect;
