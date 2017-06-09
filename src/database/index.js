import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCVHYFDj9T7jrMZQZVDeBevTKVdqVXN3WE",
    authDomain: "asqill-a14dc.firebaseapp.com",
    databaseURL: "https://asqill-a14dc.firebaseio.com",
    projectId: "asqill-a14dc",
    //storageBucket: "asqill-a14dc.appspot.com",
    //messagingSenderId: "65572275446"
  };

firebase.initializeApp(config);

const database = firebase.database();

export default database;