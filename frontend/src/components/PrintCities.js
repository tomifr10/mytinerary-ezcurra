import React from "react";
import { Link as LinkRoute} from "react-router-dom";
import '../styles/printCities.css';

function PrintCities(prop) {
    return (
        <>
            {prop.Array.map((ciudad) => (
                <LinkRoute to={`/CardDetail/${ciudad._id}`} key={ciudad._id} className="ciudad">
                    <div>
                    <img
                        src={process.env.PUBLIC_URL + `${ciudad.image}`}
                        alt="Foto-cuidad"
                        className="foto-cuidad"
                    />
                    <h3 className="nombre-foto">{ciudad.name}</h3>
                    </div>
                </LinkRoute>
                ))
            }
        </>
    )
}
export default PrintCities