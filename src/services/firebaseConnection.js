import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'


let firebaseConfig = {
    apiKey: "AIzaSyCr-fE3kT1octpDNxmLiXkP9CLe1Bz-u5A",
    authDomain: "financasapp-4b3e0.firebaseapp.com",
    databaseURL: "https://financasapp-4b3e0.firebaseio.com",
    projectId: "financasapp-4b3e0",
    storageBucket: "financasapp-4b3e0.appspot.com",
    messagingSenderId: "232553613537",
    appId: "1:232553613537:web:7d0e6f2afb814b563a8fa0",
    measurementId: "G-0HW7CCNTM4"
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyBMlVwz6USwI8rlr164z2Wu_vgXB6XYZ50',
//   authDomain: 'appfinances-44117.firebaseapp.com',
//   projectId: 'appfinances-44117',
//   storageBucket: 'appfinances-44117.appspot.com',
//   messagingSenderId: '443025425800',
//   appId: '1:443025425800:web:3ef3bf1968584db4b2263d',
//   measurementId: 'G-V3EN62YJ6R',
// };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig); 
}

export default firebase;