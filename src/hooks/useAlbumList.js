import { useEffect, useCallback, useReducer } from "react";

const reducer = (state, action) => {
  const { albumList } = state;
  const { type, payload } = action;

  switch (type) {
    case "add": {
      const updatedAlbums = albumList.concat({
        ...payload,
        createdAt: new Date(),
      });
      localStorage.setItem("album_list", JSON.stringify(updatedAlbums));
      return { ...state, albumList: updatedAlbums };
    }

    case "update": {
      const updatedAlbums = [...albumList];
      const albumIndex = albumList.findIndex(
        (album) => album.id === payload.id
      );
      if (albumIndex !== -1) {
        updatedAlbums[albumIndex] = {
          ...updatedAlbums[albumIndex],
          ...payload,
        };
      }
      localStorage.setItem("album_list", JSON.stringify(updatedAlbums));
      return { ...state, albumList: updatedAlbums };
    }

    case "remove": {
      const updatedAlbums = [...albumList];
      const albumIndex = albumList.findIndex(
        (album) => album.id === payload.id
      );
      if (albumIndex !== -1) {
        updatedAlbums.splice(albumIndex, 1);
      }
      localStorage.setItem("album_list", JSON.stringify(updatedAlbums));
      return { ...state, albumList: updatedAlbums };
    }

    default:
      throw new Error();
  }
};

const albumLocalStorage = localStorage.getItem("album_list");
const existingAlbums = albumLocalStorage ? JSON.parse(albumLocalStorage) : [];

const useAlbumList = () => {
  const [state, dispatch] = useReducer(reducer, { albumList: existingAlbums });

  useEffect(() => {}, []);

  const addAlbum = useCallback((data) => {
    dispatch({ type: "add", payload: data });
  }, []);

  const updateAlbum = useCallback((data) => {
    dispatch({ type: "update", payload: data });
  }, []);

  const removeAlbum = useCallback(
    (id) => dispatch({ type: "remove", payload: { id } }),
    []
  );

  return { addAlbum, updateAlbum, removeAlbum, albumList: state.albumList };
};

export default useAlbumList;
