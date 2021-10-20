import * as firebase from "firebase/app"
import { firebase_config } from "../config"

firebase.initializeApp(firebase_config)

export default firebase