// import React from 'react';
import React, { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import NotItinerary from '../components/NotItinerary'
import { useDispatch, useSelector } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import '../styles/itinerary.css';


function Itinerary({id}) {

    const dispatch = useDispatch()
    const itineraries = useSelector(store => store.itineraryReducer.itineraries)
    console.log(itineraries)

    useEffect(()=> {
        dispatch(itinerariesActions.itinerariesFromCity(id))
    },[])

    let priceEmoji = "🍁";

    return (
        <div>
        {itineraries.length !== 0 ? (
        itineraries.map((itinerary,index) => (
    <div key={index}>
        <h2 className='titulo-itinerary'>{itinerary.name}</h2>
        <div className='container-itinerary'>
            <div className='data'>
                <img className='foto-itinerary' alt="foto-itinerary" src={itinerary.itineraryPhoto}/>
                <div className='data-itinerary'>
                    <div className='img-desc'>
                        <div className='manager'>
                            <img className='foto-manager' alt='foto-manager' src={itinerary.managerPhoto}/>
                            <h3 className='nombre-manager'>{itinerary.managerName}</h3>
                        </div>
                        <div className='price'>
                            <p>Price: {priceEmoji.repeat(itinerary.price)}</p>
                            <p>Duration: {itinerary.duration}hrs</p>
                            <p><Button className='fav-boton' variant="outlined" startIcon={<FavoriteBorderIcon className='fav-icon'/>}></Button> 0</p>
                        </div>
                    </div>
                </div>
                    <p className='descripcion'>{itinerary.description}</p>
                    <div className='hashtags'>{itinerary.hashtags.map(hash => <p className='hash'>{hash}</p>)}</div>
            </div>
            <Accordion className='acordion'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography style={{margin: 'auto'}}>See more</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography sx={{fontSize:'1.5rem'}}>Soon new activities!!</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
            ))) : <NotItinerary/>}
    </div>
    )
}
export default Itinerary