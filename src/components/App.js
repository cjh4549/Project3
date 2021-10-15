import realtime from './firebase';
import {useState, useEffect} from 'react';
import {ref, onValue} from 'firebase/database'
import Note from './Note';
import Form from './Form';


function App() {

      const [notesArray, setNotes] = useState([]);
      

      useEffect(() => {
        const dbRef = ref(realtime);

        onValue(dbRef, (snapshot) => {
          const dbObjects = snapshot.val(); // firebase object
          console.log(dbObjects)

          const newArray = [];

          for (let dbChild in dbObjects) { 

            const noteObject = { // <-- This is the problem
              title: dbObjects[dbChild].title,
              note: dbObjects[dbChild].note,
              dbKey: dbChild
            }

            console.log(noteObject)

            newArray.push(noteObject);
            console.log(newArray)
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
              
              
              
              
              notesArray.map((noteObject) => { 
                return(
                  <Note 
                    key={noteObject.title}
                    dbKey={noteObject.dbKey}
                    title={noteObject.title}
                    note={noteObject.note}
                  />
                )  
              })
            }
          </ul>
        </div>
      );
}

export default App;
