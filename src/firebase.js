import { initializeApp } from "firebase/app";

import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDm_7iFdKWrvYxZXlY8rY0H_UUYXEJ1yJ0",
  authDomain: "fir-netlify.firebaseapp.com",
  projectId: "fir-netlify",
  storageBucket: "fir-netlify.appspot.com",
  messagingSenderId: "593999373392",
  appId: "1:593999373392:web:c175e5fd956ff72e5c5d55"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const realtime = getDatabase(app);

export default realtime;