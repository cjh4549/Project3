import realtime from './firebase';
import {ref, remove} from '@firebase/database';
import {useState} from 'react';

function Note(props) {

    const [titleNode, setTitleNode] = useState("");

    const handleDelete = (title) => {
        const childNode = ref(realtime, title);
        remove(childNode);
        setTitleNode(title);
    }

    return (
        <>
            <li>{props.title}</li>
            <p>{props.note}</p>
            <button onClick={() => handleDelete(props.title)}>Delete</button>
        </>
    )
}

export default Note;