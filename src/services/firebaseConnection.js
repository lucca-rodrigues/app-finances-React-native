import firebase from 'firbase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBMlVwz6USwI8rlr164z2Wu_vgXB6XYZ50',
  authDomain: 'appfinances-44117.firebaseapp.com',
  projectId: 'appfinances-44117',
  storageBucket: 'appfinances-44117.appspot.com',
  messagingSenderId: '443025425800',
  appId: '1:443025425800:web:3ef3bf1968584db4b2263d',
  measurementId: 'G-V3EN62YJ6R',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
