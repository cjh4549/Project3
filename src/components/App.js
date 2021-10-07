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
      const dbObject = snapshot.val(); // firebase object

      const newArray = [];

      // dbObject.map((dbChild) => {
      //   const noteObject = {
      //     title: dbObject[dbChild].title,
      //     note: dbObject[dbChild].note,
      //   } 

      //   newArray.push(noteObject)
      //   console.log(newArray);

      // })

      for (let dbChild in dbObject) { // dbChild -MlO80DMbGq6q5cD25mK

        // const specificNode = ref(realtime, dbChild)
        // remove(specificNode)       < --- This worked!!!

        const noteObject = { // just an object
          title: dbObject[dbChild].title,
          note: dbObject[dbChild].note,
        }

        newArray.push(dbChild);
        console.log(newArray)
      }

      setNotes(newArray); // [ {just an object} ]
      
    })
  }, []);

  return (
    <div className="App">
      <h1>Google Keep Inspired Project</h1>
      <Form />
      <ul>
        {
          notesArray.map((noteIndividualObj, index) => { //just an object
            return(
              <Note 
                key={index}
                node={noteIndividualObj}
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
