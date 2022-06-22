import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import '../styles/itinerary.css';


function Itinerary() {
    return (
        <div className='container-itinerary'>
            <h2 className='titulo-itinerary'>National Park</h2>
            <div className='img-desc'>
                <div className='manager'>
                    <img className='foto-manager' alt='foto-manager' src='https://sanmartininforma.gob.ar/wp-content/uploads/2020/10/plantan-en-pnl.jpg' />
                    <h3 className='nombre-manager'>Aaron Gray</h3>
                </div>
                <div className='price'>
                    <p>Price: 🍁🍁🍁</p>
                    <p>Duration: 5hrs</p>
                    <p><Button className='fav-boton' variant="outlined" startIcon={<FavoriteBorderIcon className='fav-icon'/>}></Button> 0</p>
                </div>
            </div>
                <p className='descripcion'>National Park Experiences is a curated collection that brings the stories of our National Parks to life. Each experience offers an authentic insight into the landscape and special qualities of a National Park.</p>
            <p>#canada #nationalpark #forrest #wild</p>
            <Accordion className='acordion'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography style={{margin: 'auto'}}>See more</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default Itinerary