import realtime from './firebase';
import {ref, remove, child, push, onValue, parent} from '@firebase/database';

function Note(props) { // just an object

    const handleDelete = (node) => {
        const key = ref(realtime, node)
        remove(key);
        
        // console.log(specificNode)

       
    }

    return (
        <>
            <li key={props.title}>
                <p>{props.title}</p>
                <p>{props.note}</p>
                <button onClick={() => handleDelete(props.node)}>Delete</button>
            </li>
        </>
    )
}

export default Note;