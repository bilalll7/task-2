import React, { createContext, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (surah) => {
    setFavorites((prevFavorites) => [...prevFavorites, surah]);
  };

  const removeFavorite = (nomor) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((surah) => surah.nomor !== nomor)
    );
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
