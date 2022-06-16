import React from 'react';
import '../styles/notFound.css';

function NotFound() {
    return (
        <div className='container-notFound'>  
            <img className='logo-notFound' alt='Not-Found' src={process.env.PUBLIC_URL + '../assets/images/not-found.png'}/>
            <h5 className='notFound'>Not Found</h5>
        </div>
    )
}
export default NotFound