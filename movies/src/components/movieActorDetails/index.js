import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// A Drawer component is either visible (open) or hidden. We control this with a boolean state variable - drawerOpen.

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};


const MovieActorDetails = ({ actors }) => { 
  return (
    <>
      <Typography variant="h5" component="h3">
        {actors.name}
      </Typography>

      <Typography variant="h6" component="p">
        {actors.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
         <Chip
         label={`Popularity rating: ${actors.popularity}`}
        />
        
        <Chip
         label={`Date of birth: ${actors.birthday}`}
        />

         <Chip
         label={`Birthplace: ${actors.place_of_birth}`}
        />

         <Chip
         label={`Best known for: ${actors.known_for_department}`}
        />

        </Paper>
      </>
  );
};
export default MovieActorDetails ;