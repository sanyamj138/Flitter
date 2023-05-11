import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDrK3ruDmUx37_KXexvVKsG01cn4MwOl2A",
  authDomain: "flitter-e7817.firebaseapp.com",
  projectId: "flitter-e7817",
  storageBucket: "flitter-e7817.appspot.com",
  messagingSenderId: "286695133336",
  appId: "1:286695133336:web:892dd74ebe8a53cf59c0ed",
  measurementId: "G-EP7KZ71G7J"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db