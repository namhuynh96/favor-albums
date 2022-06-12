import { useState, memo } from "react";
import { Input, Button } from "antd";

import useLanguage from "../../../../hooks/useLanguage";
import classes from "./Form.module.css";

const Form = ({ onCreate }) => {
  const [albumName, setAlbumName] = useState("");
  const [isErrorr, setIsError] = useState(false);

  const { albumForm } = useLanguage();

  const _onChangeAlbumName = (e) => {
    setAlbumName(e.target.value);
  };

  const _onCreate = () => {
    if (albumName.trim().length === 0) {
      setIsError(true);
    } else {
      onCreate(albumName);
      setIsError(false);
      setAlbumName("");
    }
  };

  return (
    <div className={classes.wrapper}>
      <h3>{albumForm.title}</h3>
      <Input
        className={classes.input}
        placeholder={albumForm.placeholder}
        value={albumName}
        onChange={_onChangeAlbumName}
      />
      {isErrorr && (
        <div className="gl-errorMessage">{albumForm.errorMessage}</div>
      )}
      <Button className={classes.btn} onClick={_onCreate}>
        {albumForm.button}
      </Button>
    </div>
  );
};

export default memo(Form);
