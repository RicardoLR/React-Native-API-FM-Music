import * as firebase from 'firebase'

import {variablesAuth} from '../config/config'


const config = variablesAuth;

firebase.initializeApp(config)

export const firebaseDatabase = firebase.database()
export const firebaseAuth = firebase.auth()

/** @export  firebaseDatabase
 *  @export  firebaseAuth
 */
export default firebase
