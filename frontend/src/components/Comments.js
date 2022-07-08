import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';


function Comments({id}) {

    const dispatch = useDispatch()
    const [comments,setComments] = useState([]);
    const [itineraries,setitineraries] = useState([]);
    const [inputText,setInputText] = useState(""); 
    const [modifyCom,setModifyCom] = useState("");
    const [reload,setReload] = useState(false);
    const [newButton,setNewButton] = useState(false);
    const user = useSelector(store => store.usersReducer.user);

    // const addComment = dispatch(itinerariesActions.addComment)
    // const modifyComment = dispatch(itinerariesActions.modifyComment)
    // const deleteComment = dispatch(itinerariesActions.deleteComment)



    useEffect(() => {
        async function comments() {
            const res = await dispatch(itinerariesActions.findOneItinerary(id));
            setitineraries(res.data.response)
            return res
        };
        comments()
    }, [reload])
    // let ids = itineraries?.comments.map(comment => (comment.userId ))
    // console.log(ids)

    async function toAdd(event) {
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

    // function toChangeInputs(event) {
    //     setNewButton(true)
    // }
    
    async function toDelete(event) {
        await dispatch(itinerariesActions.deleteComment(event));
        setReload(!reload)
 }

  return (
    <>  
        <div>
            <div style={{marginBottom: '1rem'}}>Comentarios</div>
            <div><input onChange={(event) => setInputText(event.target.value)} value={inputText} type="text-area"/></div>
            <button onClick={toAdd} >botton</button>
            {/* { itineraries.comments?.map(comment => (<p>{comment.comment}</p>))} */}

{/* 
            {comments?.map((comment) =>
                (props.user ?
                    (props.user.id !== comment.userId._id ?  */}

            {itineraries.comments?.map(comment => (
                (user ?
                    ((comment.userId.includes(user?.id)) ? 
                    <div>

                        <div><input type="text-area" className="card-text textComments" onChange={(event) => setModifyCom(event.target.value)} />{comment.comment}</div>
                            <button  onClick={()=>toModify(comment._id)} className="btn btn-primary btnComments">Modificar</button>
                            <button  onClick={()=>toDelete(comment._id)} className="btn btn-primary btnComments">Eliminar</button>
                        {/* <p>ACA PODRIA MODIFICARs-BORRAR</p> */}
                    </div>
                    : 
                    <p>{comment.comment}</p>
                ) 
                :  <p>{comment.comment}</p>)
            ))}
        </div>

    </>
  )
  }
export default Comments

// {place?.comments.map(comment =>
//     <>
//       {comment.userID?._id !== props.user?.id ?
//         <div className="card cardComments " key={comment._id}>
//           <div className="card-header cardHeader">
//             <p>{comment.userID.fullName}</p> <p>{new Date(comment.date).toUTCString()}</p>
//           </div>
//           <div className="card-body">
//             <p className="card-text cardText">{comment.comment}</p>
//           </div>
//         </div> :

//         <div className="card cardComments">
//           <div className="card-header cardHeader">
//             <p>{comment.userID.fullName}</p> <p>{new Date(comment.date).toUTCString()}</p>
//           </div>
//           <div className="card-body ">

//             <div type="text" className="card-text textComments" onInput={(event) => setModifi(event.currentTarget.textContent)} contentEditable >{comment.comment}</div>
//             <button id={comment._id} onClick={modificarComentario} className="btn btn-primary btnComments">Modificar</button>
//             <button id={comment._id} onClick={eliminarComentario} className="btn btn-primary btnComments">Eliminar</button>
//           </div>
//         </div>
//       }
//     </>
//   )}