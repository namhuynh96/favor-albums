import { memo } from "react";
import { HeartOutlined, DeleteOutlined } from "@ant-design/icons";

import classes from "./Album.module.css";

const Album = ({
  name,
  createdAt,
  id,
  isSaveAsBest,
  onRemove,
  onSaveAsBest,
}) => {
  return (
    <div>
      <div className={classes.nameWrapper}>
        <div className={classes.name}>{name}</div>
        <div className={classes.icons}>
          <HeartOutlined
            className={isSaveAsBest ? classes.heartActive : ""}
            onClick={() => onSaveAsBest(id, !isSaveAsBest)}
          />
          <DeleteOutlined onClick={() => onRemove(id)} />
        </div>
      </div>

      <div className={classes.metaInfo}>
        <div>ID: {id}</div>
        <div>{createdAt}</div>
      </div>
    </div>
  );
};

export default memo(Album);
