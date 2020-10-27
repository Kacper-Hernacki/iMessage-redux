import firebase from 'firebase';

const firebaseConfig = {
  // your firebase credentials go here
  apiKey: 'AIzaSyAGmMd1Jl0sByAxAoQLHkCrWJLSKOtqeEc',
  authDomain: 'imessage-redux-15273.firebaseapp.com',
  databaseURL: 'https://imessage-redux-15273.firebaseio.com',
  projectId: 'imessage-redux-15273',
  storageBucket: 'imessage-redux-15273.appspot.com',
  messagingSenderId: '919755312520',
  appId: '1:919755312520:web:7c750fdd65792d4d2f3e3d',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
