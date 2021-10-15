import {ref, push} from '@firebase/database';
import realtime from './firebase';
import {useState} from 'react';

function Form(){

    const [noteInfo, setNoteInfo] = useState({title: "", note: ""});

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

    return(
            <form onSubmit={handleSubmit}>
                <label htmlFor="noteTitle">Title</label>
                <input onChange={handleChange} 
                    value={noteInfo.title} 
                    type="text" 
                    id="noteTitle" 
                    placeholder="Title" 
                    name="title"
                />

                <label htmlFor="noteBody">Note</label>
                <input onChange={handleChange} 
                    value={noteInfo.note} 
                    type="text" 
                    id="noteBody" 
                    placeholder="Take a note..." 
                    name="note"
                />
                <button>Add</button>
            </form>
    )
}

export default Form