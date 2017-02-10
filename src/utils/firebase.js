import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC3yGwjoHNIuhkh7C2kkGIwPcGYylWKQ_k",
  authDomain: "invites-103fe.firebaseapp.com",
  databaseURL: "https://invites-103fe.firebaseio.com",
  storageBucket: "invites-103fe.appspot.com",
  messagingSenderId: "836437973825"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;