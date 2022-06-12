import { memo } from "react";

import Album from "../../components/Album/Album";
import classes from "./List.module.css";

const List = ({ list, onRemove, onUpdate }) => {
  return (
    <>
      {list.map((album) => (
        <div key={album.id} className={classes.album}>
          <Album
            id={album.id}
            createdAt={album.createdAt.toLocaleString()}
            name={album.name}
            isSaveAsBest={album.isSaveAsBest}
            onRemove={onRemove}
            onSaveAsBest={onUpdate}
          />
        </div>
      ))}
    </>
  );
};

export default memo(List);
