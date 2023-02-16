import * as firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDxESUqoPYHc6RmNOQz-Txs1JehGRaRUXc",
    authDomain: "jy-academy-6bb17.firebaseapp.com",
    projectId: "jy-academy-6bb17",
    storageBucket: "jy-academy-6bb17.appspot.com",
    messagingSenderId: "306174797257",
    appId: "1:306174797257:web:f9d9dcc4201391d3e6f418",
    measurementId: "G-3FFK6NBKDW"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.database();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage }



