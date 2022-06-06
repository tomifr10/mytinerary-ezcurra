import React from "react";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LogoAlce from '../assets/images/logo-alce.png'

// import Typography from '@mui/material/Typography'

//importo los estilos
import "../styles/carousel.css";

// importo componentes locales
// import Carousel from 'react-bootstrap/Carousel';
import FotoYukon from "../assets/images/Yukon.jpg";
import FotoVancouver from "../assets/images/Vancouver.jpg";
import FotoAlberta from "../assets/images/Alberta.jpg";
import FotoToronto from "../assets/images/Toronto.jpg";
import FotoBrunswick from "../assets/images/Brunswick.jpg";
import FotoEdmonton from "../assets/images/Edmonton.jpg";
import FotoGaspesie from "../assets/images/Gaspesie-QB.jpg";
import FotoNiagara from "../assets/images/Niagara.jpg";
import FotoOntario from "../assets/images/Ontario.jpg";
import FotoPrinceEdward from "../assets/images/Prince-Edward.jpg";
import FotoQuebec from "../assets/images/Quebec.jpg";
import FotoScotia from "../assets/images/Scotia.jpg";

let arrayCuidades = [
  {
    cuidad: "Yukon",
    imagen: FotoYukon,
    id: 1,
  },
  {
    cuidad: "Vancouver",
    imagen: FotoVancouver,
    id: 2,
  },
  {
    cuidad: "Alberta",
    imagen: FotoAlberta,
    id: 3,
  },
  {
    cuidad: "Toronto",
    imagen: FotoToronto,
    id: 4,
  },
];
let arrayCuidades2 = [
  {
    cuidad: "New Brunswick",
    imagen: FotoBrunswick,
    id: 5,
  },
  {
    cuidad: "Edmonton",
    imagen: FotoEdmonton,
    id: 6,
  },
  {
    cuidad: "Gaspesie",
    imagen: FotoGaspesie,
    id: 7,
  },
  {
    cuidad: "Niagara",
    imagen: FotoNiagara,
    id: 8,
  },
];
let arrayCuidades3 = [
  {
    cuidad: "Ontario",
    imagen: FotoOntario,
    id: 9,
  },
  {
    cuidad: "Prince Edward",
    imagen: FotoPrinceEdward,
    id: 10,
  },
  {
    cuidad: "Quebec",
    imagen: FotoQuebec,
    id: 11,
  },
  {
    cuidad: "New Scotia",
    imagen: FotoScotia,
    id: 12,
  },
];
let array = [arrayCuidades, arrayCuidades2, arrayCuidades3];

export default function BSCarousel() {
  return (
    <Box sx={{ backgroundColor: "white", marginBottom: "", paddingBottom: '3rem' }}>
      <h2 className="titulo-carousel">Popular MyTineraries</h2>
      <img
        src={LogoAlce}
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
        {array.map((cadaArray, index) => (
          <Box className="slide" key={index}>
            {cadaArray.map((cadaCuidad) => (
              <Box className="cuidad" key={cadaCuidad.id}>
                <img
                  src={cadaCuidad.imagen}
                  alt="First slide"
                  className="foto-cuidad"
                />
                <h3 className="nombre-foto">{cadaCuidad.cuidad}</h3>
              </Box>
            ))}
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

