import realtime from './firebase';
import {ref, remove} from '@firebase/database';

function Note(props) {

    const handleDelete = (title) => {
        const childNode = ref(realtime, title);
        remove(childNode);
    }

    return (
        <>
            <li key={props.title}>
                <p>{props.title}</p>
                <p>{props.note}</p>
                <button onClick={() => handleDelete(props.title)}>Delete</button>
            </li>
        </>
    )
}

export default Note;