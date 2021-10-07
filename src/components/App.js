import realtime from './firebase';
import {useState, useEffect} from 'react';
import {ref, onValue} from 'firebase/database'
import Note from './Note';
import Form from './Form';


function App() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const dbRef = ref(realtime);

    onValue(dbRef, (snapshot) => {
      const dbObject = snapshot.val();

      const newArray = [];

      for (let dbChild in dbObject) {

        const noteObject = {
          title: dbObject[dbChild].noteTitle,
          note: dbObject[dbChild].noteBody,
        }

        newArray.push(noteObject);
        
      }

      setNotes(newArray);
      
    })
  }, []);

  return (
    <div className="App">
      <h1>Google Keep Inspired Project</h1>
      <Form />
      <ul>
        {
          notes.map((note) => {
            return(
              <Note 
                key={note.title}
                title={note.title}
                note={note.note}
              />
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
