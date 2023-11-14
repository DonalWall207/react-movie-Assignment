//same as addToFavourites page with name changes and altered context 
import React, { useContext } from "react";
import { MovieActorContext } from "../../contexts/movieActorContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToMovieActorFavoritesIcon = ({ actors }) => {
  const context = useContext(MovieActorContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToActorFavourites(actors);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMovieActorFavoritesIcon;