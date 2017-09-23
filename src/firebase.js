import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAG0_3VsMRYOZPZMp8K5IFXEeCJoFphvPo",
    authDomain: "react-firebase-2ec0e.firebaseapp.com",
    databaseURL: "https://react-firebase-2ec0e.firebaseio.com",
    storageBucket: "react-firebase-2ec0e.appspot.com",
    messagingSenderId: "611651744430"
}

firebase.initializeApp(config)

export const firebaseDatabase = firebase.database()
export const firebaseAuth = firebase.auth()

/** @export  firebaseDatabase
 *  @export  firebaseAuth
 */
export default firebase
