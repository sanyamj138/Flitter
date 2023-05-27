import {
  initializeApp
} from "firebase/app"
import {
  getAuth,
  onAuthStateChanged
} from "firebase/auth"
import {
  LocalStorage
} from 'quasar'

const firebaseConfig = {
  apiKey: "AIzaSyDrK3ruDmUx37_KXexvVKsG01cn4MwOl2A",
  authDomain: "flitter-e7817.firebaseapp.com",
  projectId: "flitter-e7817",
  storageBucket: "flitter-e7817.appspot.com",
  messagingSenderId: "286695133336",
  appId: "1:286695133336:web:892dd74ebe8a53cf59c0ed",
  measurementId: "G-EP7KZ71G7J"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    LocalStorage.set('user', user)
  } else {
     LocalStorage.remove('user')
  }
});