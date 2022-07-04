import React from 'react';
import GoogleSignUp from "./GoogleSignUp";
import axios from "axios";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MDBIcon } from "mdbreact";
import '../styles/withGoogle.css'
// import { Select } from '@mui/material';


function WithGoogle() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      const [country, setcountry] = useState(null);
      function userCountry(event) {
          setcountry(event.target.value);
      } 
      console.log(country)
      
      const [paices, setpaices] = useState(null);
  
      useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((response) => {
          setpaices(response.data);
        });
      }, []);
    
      const paicesOrdenados = paices?.map((pais) => pais.name.common).sort();

      return (
        <div>
          <Button onClick={handleOpen}><MDBIcon icon="google" className="redes-form" /></Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography sx={{textAlign: 'center', padding: '1rem'}} id="modal-modal-title" variant="h6" component="h2">
                Choose your country
              </Typography>
              <Box>
                    <select className="paices-modal" onChange={userCountry}>
                    <option className="option"></option>
                        {paicesOrdenados?.map((pais, id) => (
                        <option className="option" key={id} value={pais}>
                        {pais}
                        </option>
                    ))}
                    </select>
              </Box>
              <div>{(country !== null) ? <GoogleSignUp Country={country}/> : <div></div>}</div>
            </Box>
          </Modal>
        </div>
      );
}

export default WithGoogle