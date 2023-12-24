// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCCPKQX26OAjWhB60PbKzn9InSh-I2SkHE',
  authDomain: 'cuentas-mama-mona.firebaseapp.com',
  projectId: 'cuentas-mama-mona',
  storageBucket: 'cuentas-mama-mona.appspot.com',
  messagingSenderId: '203052354089',
  appId: '1:203052354089:web:f43035ec4590fb85d02a38'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
