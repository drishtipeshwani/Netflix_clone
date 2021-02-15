import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAOVubVzwNOaGVQ-6gt8yrcTcOpWgwTp4c',
  authDomain: 'netflix-clone-78cf0.firebaseapp.com',
  projectId: 'netflix-clone-78cf0',
  storageBucket: 'netflix-clone-78cf0.appspot.com',
  messagingSenderId: '10966146647',
  appId: '1:10966146647:web:bfb58bd964d8d8884b4d12',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db
