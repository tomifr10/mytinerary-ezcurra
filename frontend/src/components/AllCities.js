import React, { useEffect, useState } from "react";
import "../styles/allCities.css";
import PrintCities from "./PrintCities";
import NotFound from "./NotFound";
import axios from 'axios'

function AllCities() {

  const [cities, setCities] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/api/cities')
            .then(response => setCities(response.data.response.cities))
            //eslint-disable-next-line
    },[])
    
    console.log(cities)

  const [buscador, setBuscador] = useState("");
  const [arrayfiltro, setArrrayFiltro] = useState(cities);
  console.log(arrayfiltro)
  
  function busqueda(e) {
    setBuscador(e.target.value);
  }
  
  useEffect(() => {
    let ciudadFiltrada = cities.filter(ciudad => 
        ciudad.name.toLowerCase().startsWith(buscador.trim().toLowerCase()));
        setArrrayFiltro(ciudadFiltrada)
  },[buscador, cities]);


  return (
    <div>
      <h2 className="titulo-cities">Cities</h2>
      <div className="group">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input placeholder="Search" type="search" className="input" onKeyUp={busqueda} />
      </div>
      <div className="container-cities"> {arrayfiltro && arrayfiltro?.length !== 0 ? <PrintCities Array={arrayfiltro} /> : <NotFound/> }
      </div>
    </div>
  );
}
export default AllCities;
