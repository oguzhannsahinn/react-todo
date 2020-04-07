import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDclih0nTDEyy0JdxmoHb0AO2NyPlUUXz0",
    authDomain: "todo-react-861b9.firebaseapp.com",
    databaseURL: "https://todo-react-861b9.firebaseio.com",
    projectId: "todo-react-861b9",
    storageBucket: "todo-react-861b9.appspot.com",
    messagingSenderId: "115040937070",
    appId: "1:115040937070:web:3b3950e49ba329387cb27f"
  };

  const fire = firebase.initializeApp(firebaseConfig);

export default fire;