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
          src="https://images.unsplash.com/photo-1610141353646-14306dc6a9ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
