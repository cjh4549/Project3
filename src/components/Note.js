import realtime from './firebase';
<<<<<<< HEAD
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
=======
import {ref, remove} from '@firebase/database';

function Note(props) { // just an object

    const handleDelete = (keyToDelete) => {
        const key = ref(realtime, keyToDelete)
        remove(key);
    }
>>>>>>> origin/main

    console.log(props.title);
    
    return (
        <>
            <li key={props.title}>
                <p>{props.title}</p>
                <p>{props.note}</p>
<<<<<<< HEAD
                <button onClick={() => {handleDelete()}}>Delete</button>
=======
                <button onClick={() => handleDelete(props.delete)}>Delete</button>
>>>>>>> origin/main
            </li>
        </>
    )
}

export default Note;