import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjO6zWl21V7PQVv0gvf00ZHFsAbaFNAIw",
  authDomain: "proyecto-react-pet-shop.firebaseapp.com",
  projectId: "proyecto-react-pet-shop",
  storageBucket: "proyecto-react-pet-shop.appspot.com",
  messagingSenderId: "1097968237850",
  appId: "1:1097968237850:web:3ef7c968e73d18178640a3"
};

// Inicializamos la app
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () =>{
    return firebase.firestore(app)
}