import React from "react";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Data from '../data/data.json'
import "../styles/carousel.css";

export default function BSCarousel() {
  return (
    <Box sx={{ backgroundColor: "white", marginBottom: "", paddingBottom: '3rem' }}>
      <h2 className="titulo-carousel">Popular MyTineraries</h2>
      <img
        src={process.env.PUBLIC_URL+'../assets/images/logo-alce.png'}
        className="loguito"
        alt="logo-alce"
      />
      <Carousel
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
          width: "80%",
          margin: "auto",
        }}
        PrevIcon={<ArrowBackIosNewIcon />}
        NextIcon={<ArrowForwardIosIcon />}
      >
        {Data.canada.map((cadaArray, index) => (
          <Box className="slide" key={index}>
            {cadaArray.provincia.map((cadaCiudad) => (
              <Box className="cuidad" key={cadaCiudad.id}>
                <img
                  src={process.env.PUBLIC_URL+ `${cadaCiudad.imagen}`}
                  alt="First slide"
                  className="foto-cuidad"
                />
                <h3 className="nombre-foto">{cadaCiudad.cuidad}</h3>
              </Box>
            ))}
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

