import {useState} from 'react';

function Form(){

    const [userInput, setUserInput] = useState("");

    const handleChange = () => {
        console.log('changed!')
    }

    return(
        <form>
            <label htmlFor="userNote">Title</label>
            <input onChange={handleChange} type="text" id="userNote" placeholder="Take a note..."/>
            <button>Add</button>
        </form>
    )
}

export default Form