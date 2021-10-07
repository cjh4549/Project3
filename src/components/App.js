import realtime from './firebase';
import {useState, useEffect} from 'react';
import {ref, onValue, remove} from 'firebase/database'
import Note from './Note';
import Form from './Form';


function App() {

  const [notesArray, setNotes] = useState([]);

  useEffect(() => {
    const dbRef = ref(realtime);

    onValue(dbRef, (snapshot) => {
      const dbObject = snapshot.val(); // firebase object that captures all the objects

      const newArray = [];

      for (let keyProperty in dbObject) {
            // dbObject:
            // {
            //   -MlPBXN3lmdWy6OoAesU (how do I target this??) : {note: 'world', title: 'hello'}
            //   -MlPD4JGimdlKlWJRhg1: {note: 'test', title: 'test'}
            //   -MlPG4BKDxsikTvJAgTQ: {note: 'afasf', title: 'a'}
            // }

        // Hello, as you can tell my app is not finished... I spent the whole night trying to figure out on my last step of targeting the parent node/key that pointed to the individual object that stores the user's inputs so that I could pass that onto my Note component as props and have my button element invoke handleDelete and delete that parent node, but I had a mini meltdown and just couldn't figure it out and hence I didn't even get to CSS...
      }
      
      setNotes (newArray)
    })
  }, []);

  return (
    <div className="App">
      <h1>Google Keep Inspired Project</h1>
      <Form />
      <ul>
        {
          notesArray.map((noteIndividualObj, index) => { 
            return(
              <Note 
                key={index}
                title={noteIndividualObj.title}
                note={noteIndividualObj.note}
              />
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
