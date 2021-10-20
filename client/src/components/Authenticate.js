import firebase from "../js/firebase_app"
import { getAuth, RecaptchaVerifier } from "firebase/auth"

import { useEffect, useState } from "react"

export default function Authenticate({ children }) {
    const [recaptcha, setRecaptcha] = useState(null)
    const [auth, setAuth] = useState(null)
    useEffect(async () => {
        const a = getAuth()
        a.languageCode = "en"
        setAuth(a)
        const r = new RecaptchaVerifier('recaptcha', {
            size: 'invisible',
            callback: (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                console.log("recaptcha solved")
                // onSignInSubmit();
            }
        }, auth)
        setRecaptcha(r)
    }, [null])
    return children
}