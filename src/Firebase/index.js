import firebase from 'firebase';
import firebaseconfig from './secret.js'

const config = firebaseconfig


  // Initialize Firebase
firebase.initializeApp(config);

export default firebase;