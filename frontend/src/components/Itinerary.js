import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import NotItinerary from '../components/NotItinerary'
import { useDispatch, useSelector } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import Activities from '../components/Activities'
import '../styles/itinerary.css';


function Itinerary({id}) {

    const [reload, setreload] = useState(false)
    const [contador, setcontador] = useState(0);
    const dispatch = useDispatch();
    const itineraries = useSelector(store => store.itineraryReducer.itineraries);
    const user = useSelector(store => store.usersReducer.user);
    
    useEffect(()=> {
        dispatch(itinerariesActions.itinerariesFromCity(id));
    },[reload])

    async function handleLikes(id) {
        const res = await dispatch(itinerariesActions.likeDislike(id));
        setreload(!reload)
        return res
    };
    function openAct(event) {
        setcontador(contador + 1);
    //    let valor = event.target;
    //    valor = contador;
    //    console.log(valor)
    }

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
                            <div>
                                {
                                    (user) ?


                                    (<Button onClick={()=> handleLikes(itinerary._id)} className='fav-boton' variant="outlined" 
                                    startIcon={(itinerary?.likes.includes(user?.id)) ? (
                                        (<FavoriteIcon className='fav-icon'/>)) : (<FavoriteBorderIcon className='fav-icon'/>)
                                    }></Button>)



                                    : <Button onClick={()=> handleLikes(itinerary._id)} className='fav-boton' variant="outlined" 
                                    startIcon={<FavoriteBorderIcon className='fav-icon'/>}></Button>
                                }
                                 {itinerary?.likes.length}</div>
                        </div>
                    </div>
                </div>
                    <p className='descripcion'>{itinerary.description}</p>
                    <div className='hashtags'>{itinerary.hashtags.map(hash => <p className='hash'>{hash}</p>)}</div>
            </div>
            <Accordion className='acordion' onClick={openAct} key={index} id={index}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                key={index}
                >{((contador % 2) === 0) ?
                    <Typography style={{margin: 'auto', fontWeight: '550'}}>Show activities</Typography>
                :   <Typography style={{margin: 'auto', fontWeight: '550'}}>Hide activities</Typography>
                }
                </AccordionSummary>
                <AccordionDetails>
                    <Activities id={itinerary._id}/>
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
            ))) : <NotItinerary/>}
    </div>
    )
}
export default Itinerary

// Mui-expanded