import React, { useState } from "react";

export const MovieActorContext = React.createContext(null);

const MovieActorContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] ) 

  const addToActorFavorites = (actors) => {
    let newFavorites = [...favorites];
    if (!favorites.includes(actors.id)) {
      newFavorites.push(actors.id);
    }
    setFavorites(newFavorites);
    console.log(newFavorites)
  };

   const removeFromFavorites = (actors) => {
    setFavorites( favorites.filter(
      (mId) => mId !== actors.id
    ) )
  };


 return (
    <MovieActorContext.Provider
      value={{
        favorites,
        addToActorFavorites,
        removeFromFavorites,
      }}
    >
      {props.children}
    </MovieActorContext.Provider>
  );
};

export default MovieActorContextProvider;