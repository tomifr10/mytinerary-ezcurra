import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link as LinkRoute} from "react-router-dom";
import axios from 'axios'
import '../styles/cardDetail.css';

function CardDetail() {

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
            document.documentElement.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth", // Optional if you want to skip the scrolling animation
            });
      }, []);  

    const { id } = useParams();

    const [cities, setCities] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/api/cities/' + id)
            .then(response => setCities(response.data.response))
            //eslint-disable-next-line
        },[])

    // const cardDetail = cities
    // console.log(cardDetail)
    return (
        <div className='container-detail'>
            <LinkRoute className="boton-back" to="/cities">Back</LinkRoute>
            <img alt="foto-detail" className="foto-detail" src={process.env.PUBLIC_URL + `${cities.image}`}/>
            <h3 className="titulo-detail">{cities.name}</h3>
            <div>
                <p className="description">{cities.description}</p>
            </div>
        </div>
    )
}
export default CardDetail