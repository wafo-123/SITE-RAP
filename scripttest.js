import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, setDoc, getDoc, where, writeBatch, query, orderBy, doc, limit, getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwwziv-Hyio7J7j7MWiJiQlE9bLEqw6ls",
    authDomain: "rap-test-13657.firebaseapp.com",
    projectId: "rap-test-13657",
    storageBucket: "rap-test-13657.appspot.com",
    messagingSenderId: "31108651554",
    appId: "1:31108651554:web:714fc0140fc6f00599087b",
    measurementId: "G-6PZV57W8TB"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



// fonction pour récupèrer une collection (READ)
const getDocument = async (collectionName) => {
    const DocumentColRef = collection(db, collectionName);
    const DocumentSnapshot = await getDocs(DocumentColRef);
    const DocumentList = DocumentSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    return DocumentList
  }


const userExist = async (name, password) => {
  
    const DocumentColRef = collection(db, "users");
    const q = await query(DocumentColRef, where("name", "==", name), where("password", "==", password))
    const querySnapshot = await getDocs(q);
    console.log("querySnapshot docs", querySnapshot.docs)
    const DocumentList = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    console.log('test user already exists', name, password, DocumentList);
    return DocumentList;
  };

  userExist("enzo", "1234")
  userExist("enzo", "test")
// fonction pour créer une collection (CREATE)
const createDocument = async (collectionName, newObj) => {
    console.log('createDocument', newObj)
    const DocumentColRef = collection(db, collectionName);
    const DocumentSnapshot = await addDoc(DocumentColRef, newObj);
}
// createDocument("burgers", {name: "cheeseburger"})

// fonction pour mettre à jour une collection (UPDATE)
const updateDocument = async (collectionName, newObj) => {
    console.log('updateDocument', newObj)
    const DocumentColRef = doc(db, collectionName, newObj.id)
    const DocumentSnapshot = await updateDoc(DocumentColRef, newObj);
}
// fonction pour supprimer une collection (DELETE)
const deleteDocument = async (collectionName, id) => {
    console.log('deleteDocument', id)
    const DocumentColRef = doc(db, collectionName, id)
    console.log('DocumentColRef', DocumentColRef)
    await deleteDoc(DocumentColRef, id);
}

const getData = async() => {
   const data = await fetch("https://json-ece.glitch.me/burgers.json")
   const json = await data.json()
   console.log("json", json)
   displayBurgers(json.data)

   const burgers = document.querySelectorAll('.burger')
    burgers.forEach((burgerHTML, index) => {
        burgerHTML.addEventListener('click', () => {
            displayBurger(burgerList[index])
        })
    })
}

const getDataFirebase = async() => {
    
    const burgers = await getDocument("rappeurliste")
    const contentHTML = document.querySelector('.content')
    burgers.forEach((burger, index) => {
        contentHTML.innerHTML += `<div>${burger.NOM}${burger.PAYS}</div>`
    })
    console.log('burgers', burgers)


   
}



getDataFirebase()

