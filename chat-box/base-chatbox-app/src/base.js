import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyATf2OJwKrk1gIJj0O0IHjBH2O7u8Iemmo",
    authDomain: "chatbox-app-ea324.firebaseapp.com",
    databaseURL: "https://chatbox-app-ea324.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base;