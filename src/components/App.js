import realtime from './firebase';
import {useState, useEffect} from 'react';
import {ref, onValue} from 'firebase/database'


function App() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {

    const dbRef = ref(realtime);

    onValue(dbRef, (snapshot) => {
      const dbObject = snapshot.val();

      const newArray = [];

      for (let property in dbObject) {
        const noteObject = {
          title: property,
          note: dbObject[property]
        }

        newArray.push(noteObject);
      }

      setNotes(newArray);
      
    })

  }, []);

  return (
    <div className="App">
      <h1>Google Keep Inspired Project</h1>
    </div>
  );
}

export default App;
