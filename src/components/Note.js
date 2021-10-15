import realtime from './firebase';
import {ref, remove } from '@firebase/database';

function Note(props) { // just an object

    // const handleDelete = (keyToDelete) => {
    //     const parentNodeRef = ref(realtime, keyToDelete)
    //     remove(parentNodeRef)
    // 

    const handleDelete = () => {
        const parentNodeRef = ref(realtime, props.dbkey)
        remove(`${parentNodeRef}/title`)
      } 

    console.log(props.title);
    
    return (
        <>
            <li key={props.title}>
                <p>{props.title}</p>
                <p>{props.note}</p>
                <button onClick={() => {handleDelete()}}>Delete</button>
            </li>
        </>
    )
}

export default Note;