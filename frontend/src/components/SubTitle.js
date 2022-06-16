import React from "react";
import { Link as LinkRoute} from "react-router-dom";
import "../styles/subtitle.css";

function Subtitle() {
  return (
    <>
      <div className="caja-subtitulo">
        <img
          className="foto-sub"
          alt="foto-subtitulo"
          src={process.env.PUBLIC_URL + `${"./assets/images/foto-subtitle.jpg"}`}
        />
        <div className="contenedor-titulo">
          <h2 className="titulo">MyTinerary</h2>
          <h3 className="subtitle">
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </h3>
          <LinkRoute to="/cities" className="boton">Welcome to Canada!</LinkRoute>
        </div>
      </div>
    </>
  );
}

export default Subtitle;
