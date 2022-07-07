import React from 'react';
import { useDispatch } from 'react-redux';
import activitiesActions from '../redux/actions/activitiesActions';
import { useState, useEffect } from 'react';
import '../styles/activities.css'


function Activities({id}) {

    const dispatch = useDispatch();
    const [activities, setactivities] = useState([])

    useEffect( ()=> {
        async function act() {
            const res = await dispatch(activitiesActions.activitiesFromItinerary(id));
            setactivities(res.data.response)
        }
        act()
    },[])


  return (
    <>
        <div className='container'>
            { activities?.length !== 0 ?
                (activities.map((activity, index) => (
                    <div className='activity' key={index}>
                        <img className='image' src={activity.activityPhoto}   alt='foto-activity'/>
                        <p className='title' >{activity.activityName}</p>
                    </div>)))
                    : <p className='soon'>New activities soon!!</p>
            }
        </div>
    </>
  )
}

export default Activities