import {ref, push} from '@firebase/database';
import realtime from './firebase';
import {useState} from 'react';

function Form(){

    // const [userInput, setUserInput] = useState("");
    // const [userNote, setUserNote] = useState("");

    const [noteInfo, setNoteInfo] = useState({noteTitle: "", noteBody: ""});

    const handleChange = (e) => {
        setNoteInfo({
            ...noteInfo,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dbRef = ref(realtime);
        push(dbRef, noteInfo);

        // if (userInput) {
        //     const dbRef = ref(realtime);
        //     push(dbRef, userInput);
        //     setUserInput('');
        // } else {
        //     alert("You can't leave it blank!");
        // }
        
    }


    // const handleSubmit2 = (e) => {
    //     e.preventDefault();
    //     if (userNote) {
    //         const childNode = ref(realtime, userNote);
    //         push(childNode);
    //         setUserNote('');
    //     } else {
    //         alert("You can't leave it blank!");
    //     }
        
    // }

    return(
            <form>
                <label htmlFor="noteTitle">Title</label>
                <input onChange={handleChange} value={noteInfo.noteTitle} type="text" id="noteTitle" placeholder="Title" name="noteTitle"/>

                <label htmlFor="noteBody">Note</label>
                <input onChange={handleChange} value={noteInfo.noteBody} type="text" id="noteBody" placeholder="Take a note..." name="noteBody"/>
                <button onClick={handleSubmit}>Add</button>
            </form>
    )
}

export default Form