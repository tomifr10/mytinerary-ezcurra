import React from "react";
import { Link as LinkRoute} from "react-router-dom";
import '../styles/printCities.css';

function PrintCities(prop) {
    return (
        <>
            {prop.Array.map((ciudad) => (
                <LinkRoute to="/cities" className="ciudad">
                    <div key={ciudad.id}>
                    <img
                        src={process.env.PUBLIC_URL + `${ciudad.imagen}`}
                        alt="Foto-cuidad"
                        className="foto-cuidad"
                    />
                    <h3 className="nombre-foto">{ciudad.ciudad}</h3>
                    </div>
                </LinkRoute>
                ))
            }
        </>
    )
}
export default PrintCities