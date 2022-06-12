import { useState, useCallback, useMemo } from "react";
import { nanoid } from "nanoid";

import Form from "./components/Form/Form";
import useAlbumList from "../../hooks/useAlbumList";
import Selection from "../../shared/components/Selection/Selection";
import classes from "./FavorAlbum.module.css";
import useLanguage from "../../hooks/useLanguage";
import List from "./containers/List/List";

const FavorAlbum = () => {
  const [sortBy, setSortBy] = useState(null);
  const [viewAs, setViewAs] = useState("list");
  const { albumList, addAlbum, updateAlbum, removeAlbum } = useAlbumList();

  const { filters: filtersLang } = useLanguage();

  const _onCreateAlbum = useCallback(
    (name) => {
      const id = nanoid(10);
      const data = { id, name, isSaveAsBest: false };
      addAlbum(data);
    },
    [addAlbum]
  );

  const _onUpdateAlbum = useCallback(
    (id, isSaveAsBest) => {
      const data = { id, isSaveAsBest };
      updateAlbum(data);
    },
    [updateAlbum]
  );

  const _onRemoveAlbum = useCallback((id) => removeAlbum(id), [removeAlbum]);

  const sortedAlbumList = useMemo(() => {
    const sorted = albumList.map((album) => ({
      ...album,
      createdAt: new Date(album.createdAt),
    }));
    if (sortBy === "id") {
      sorted.sort((a, b) => a.id.localeCompare(b.id));
    } else if (sortBy === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "date") {
      sorted.sort((a, b) => a.createdAt - b.createdAt);
    }
    return sorted;
  }, [albumList, sortBy]);

  const albumListClassName = viewAs === "grid" ? classes.albumListGrid : "";

  return (
    <div className={classes.wrapper}>
      <Form onCreate={_onCreateAlbum} />
      <div className={classes.filters}>
        <Selection
          options={filtersLang.layout.options}
          defaultValue="list"
          onChange={(value) => setViewAs(value)}
        />
        <Selection
          options={filtersLang.sortBy.options}
          placeholder={filtersLang.sortBy.placeholder}
          onChange={(value) => setSortBy(value)}
        />
      </div>
      <div className={albumListClassName}>
        <List
          list={sortedAlbumList}
          onRemove={_onRemoveAlbum}
          onUpdate={_onUpdateAlbum}
        />
      </div>
    </div>
  );
};

export default FavorAlbum;
