import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAQH43hG2NIItXsApX1xujdlksaBvg-PWM',
  authDomain: 'linkedin-clone-a9475.firebaseapp.com',
  projectId: 'linkedin-clone-a9475',
  storageBucket: 'linkedin-clone-a9475.appspot.com',
  messagingSenderId: '295634358997',
  appId: '1:295634358997:web:4070402493120b631b085c',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
