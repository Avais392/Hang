import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBmu1UMl98L3VN61KqmORT8_1BSRURUohw',
  authDomain: 'hang-64293.firebaseapp.com',
  databaseURL: 'https://hang-64293.firebaseio.com',
  projectId: 'hang-64293',
  storageBucket: 'hang-64293.appspot.com',
  messagingSenderId: '905531716313',
  appId: '1:905531716313:web:4b662c3d2663d1833e04c8',
  measurementId: 'G-3K1Z94JE5Y',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.analytics();

export default firebase;
