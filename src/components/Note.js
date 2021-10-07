import realtime from './firebase';
import {ref, remove} from '@firebase/database';

function Note(props) { // just an object

    const handleDelete = (keyToDelete) => {
        const key = ref(realtime, keyToDelete)
        remove(key);
    }

    return (
        <>
            <li key={props.title}>
                <p>{props.title}</p>
                <p>{props.note}</p>
                <button onClick={() => handleDelete(props.delete)}>Delete</button>
            </li>
        </>
    )
}

export default Note;