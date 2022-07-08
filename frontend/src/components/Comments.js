import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import toast from 'react-hot-toast';
import '../styles/comments.css'


function Comments({id}) {

    const dispatch = useDispatch()
    const [comments,setComments] = useState([]);
    const [itineraries,setitineraries] = useState([]);
    const [inputText,setInputText] = useState(""); 
    const [modifyCom,setModifyCom] = useState("");
    const [reload,setReload] = useState(false);
    const [newButton,setNewButton] = useState(false);
    const user = useSelector(store => store.usersReducer.user);

    useEffect(() => {
        async function comments() {
            const res = await dispatch(itinerariesActions.findOneItinerary(id));
            setitineraries(res.data.response)
            return res
        };
        comments()
    }, [reload])
    let ids = itineraries.comments?.map(comment => (comment.userId ))
    console.log(ids)

    async function toAdd(event) {
        if(!user) {
            toast.error('You have to be logged in');
        } 
        const commentData = {
            itinId: itineraries?._id,
            comments: {
                comment: inputText,
                userId: user?.id
            }
        }

        await dispatch(itinerariesActions.addComment(commentData))
        setInputText("")
        setReload(!reload)
    }
    
    async function toModify(event) {
        console.log(event)
        const commentData = {
            commentId: event,
            comments: {
                comment: modifyCom,
                userId: user?.id
            }
        }
        await dispatch(itinerariesActions.modifyComment(commentData))
        setNewButton(false)
        setReload(!reload)
    }

    async function toDelete(event) {
        await dispatch(itinerariesActions.deleteComment(event));
        setReload(!reload)
 }

  return (
    <>  
        <div className='container-padre'>
            <h3 className='title-comment'><p>Opinions</p><p style={{fontSize: '1rem'}}>({itineraries.comments?.length})</p></h3>
            <div className='div-input'><input className='input' onChange={(event) => setInputText(event.target.value)} value={inputText} type="text-area"/></div>
            <button onClick={toAdd} className='boton-com' >Comment</button>
            <div className='mapeo-com'>

            {itineraries.comments?.map(comment => (
                (user ?
                    ((comment.userId._id.includes(user?.id)) ? 
                    <div className='container-com'>
                        <div className='foto-text'>
                            <img className='photo' src={comment.userId.photo} />
                            <div className='container-coment'>
                                <input type="text-area" className="input" onChange={(event) => setModifyCom(event.target.value)} />
                                <p className='coment'>{comment.comment}</p>
                            </div>
                        </div>
                        <div className='container-botones'>
                            <button  onClick={()=>toModify(comment._id)} className="boton-com">Modify</button>
                            <button  onClick={()=>toDelete(comment._id)} className="boton-com">Delete</button>
                        </div>
                    </div>
                    : 
                    <div className='foto-text-out'>
                        <img className='photo' src={comment.userId.photo} />
                        <p className='coment'>{comment.comment}</p>
                    </div>
                ) 
                :  
                <div className='foto-text-out'>
                    <img className='photo' src={comment.userId.photo} />
                    <p className='coment'>{comment.comment}</p>
                </div>)
            ))}
            </div>
        </div>

    </>
  )
  }
export default Comments
