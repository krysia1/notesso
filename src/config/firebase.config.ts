import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBQFGJDXgk9BPSuEk4QF63L7hA5yRXYyEk',
  authDomain: 'notesso.firebaseapp.com',
  projectId: 'notesso',
  storageBucket: 'notesso.appspot.com',
  messagingSenderId: '802471191056',
  appId: '1:802471191056:web:5c6fd8c8b7144bb462e095',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
