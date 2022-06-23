import React, { useState, useEffect } from 'react';
import Itinerary from '../components/Itinerary';
import { useParams } from 'react-router-dom';
import { Link as LinkRoute} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import '../styles/cardDetail.css';
import citiesActions from '../redux/actions/citiesActions';

function CardDetail() {

    const dispatch = useDispatch()
    const city = useSelector(store => store.cityReducer.city)
    
    const { id } = useParams();
    useEffect(() => {
        dispatch(citiesActions.mostrarOneCity(id))
      },[])

    useEffect(() => {
            document.documentElement.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
      }, []);  

    return (
        <>
            <div className='container-detail'>
                <LinkRoute className="boton-back" to="/cities">Back</LinkRoute>
                <img alt="foto-detail" className="foto-detail" src={process.env.PUBLIC_URL + `${city.image}`}/>
                <h3 className="titulo-detail">{city.name}</h3>
                <div>
                    <p className="description">{city.description}</p>
                </div>
            </div>
            <h2 className='itineraries'>Itineraries</h2>
            <Itinerary id={id}/>
        </>
    )
}
export default CardDetail
