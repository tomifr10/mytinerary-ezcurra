import React, { useState, useEffect } from "react";
import AllCities from "../components/AllCities";
import ScrollTop from "react-scrolltop-button";
import '../styles/cities.css'

function Cities() {

    const [estadoBoton, setEstadoBoton] = useState(0);

    function CambiarEstado() {
        setEstadoBoton(estadoBoton + 1)
    }

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        if(estadoBoton !== 0) {
            document.documentElement.scrollTo({
              top: 650,
              left: 0,
              behavior: "smooth", // Optional if you want to skip the scrolling animation
            });
        }
      }, [estadoBoton]);      


    return (
        <>
            {/* <img className="foto-cities" alt="foto-cities" src="https://images.pexels.com/photos/997462/pexels-photo-997462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/> */}
            <div className="contenedor-cities">
                <h2 className="h2">Discover the canadian experience</h2>
                <div className="button" onClick={CambiarEstado}>
                    <div className="box">S</div>
                    <div className="box">T</div>
                    <div className="box">A</div>
                    <div className="box">R</div>
                    <div className="box">T</div>
                </div>
            </div>
            <AllCities />
            <ScrollTop 
            text="GO UP"
            distance={1400}
            breakpoint={768}
            style={{ backgroundColor: "black", color: 'white', borderRadius: '20px' }}
            className="scroll-your-role"
            speed={500}
            target={500}
            />
        </>
    )
}

export default Cities