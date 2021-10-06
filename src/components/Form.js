import { ref, push } from '@firebase/database';
import realtime from './firebase';
import {useState} from 'react';

function Form(){

    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput) {
            const dbRef = ref(realtime);
            push(dbRef, userInput);
        } else {
            alert("You can't leave it blank!");
        }
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="userNote">Title</label>
            <input onChange={handleChange} value={userInput} type="text" id="userNote" placeholder="Take a note..."/>
            <button>Add</button>
        </form>
    )
}

export default Form