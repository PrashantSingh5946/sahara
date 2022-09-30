import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { SHOP_DATA } from "../db/shop-data.js";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, getAuth, signOut, reauthenticateWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFoA17ShXfrhj_xz6bn5a_wLwFlW38r6M",
    authDomain: "auth-26b3b.firebaseapp.com",
    projectId: "auth-26b3b",
    storageBucket: "auth-26b3b.appspot.com",
    messagingSenderId: "978222892607",
    appId: "1:978222892607:web:f8e358656aa0ab2f0f5a8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



//Auth provider could be any of them
const provider = new GoogleAuthProvider();

export const auth = getAuth(app);

export const signInWithGooglePopup = async () => {
    let result = await signInWithPopup(auth, provider);
    console.log(result);
}

export const signInWithGoogleRedirect = async () => {
    let result = await signInWithRedirect(auth, provider);
    //gives no result but gives side effects
}

export const logout = async () => {
    await signOut(auth);
}

export const revalidate = async (user) => {
    reauthenticateWithPopup(user, provider);
}

export const createNewUserWithEmailAndPassword = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Sign Up Successful");

    }
    catch (err) {
        alert("Sign Up Unsuccessful");
        console.log(err);
    }
}

export const signInWithValues = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Sign in Successful");
    } catch (err) {
        alert("Sign in Unsuccessful");
        console.log(err);
    }

}


export const getData = async () => {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "categories"));
    let data = [];
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });

    return data;
}

// ( function addDataToDatabase (){

//     const db = getFirestore(app);



//     SHOP_DATA.forEach((category)=>{
//         {
//             addDoc(collection(db,"categories"),category).then(
//                 console.log(category)
//             )


//         }
//     })


// })();

