import React, { useEffect } from 'react'
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth" //untuk sign in with google
import { auth } from "../config/FirebaseConfig" // untuk authentication sign in 
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';

export default function Login() {

    // mendeklarasikan navigation function
    const navigation = useNavigate();

    // function untuk login dengan google
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((res) => {
                // generate token 
                const credential = GoogleAuthProvider.credentialFromResult(res)
                const token = credential.accessToken

                // get user
                const user = res.user

                console.info({ token, user })
            })
            .catch((err) => {
                console.error(err)
            })
    }

    // sign in dengan email dan password
    const handleGoogle = (e) => {

        // stop reload page
        e.preventDefault()

        // mengambil id dari form
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                navigation("/dashboard")
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // component life cycle
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.info(user)
                return navigation("/dashboard")
            }
            console.info("User Belum Login")
        })
    }, [])

    return (
        <div id='app' className='flex flex-col w-full min-h-screen justify-center items-center' >

            <form action="" onClick={handleGoogle}>

                <h1>Halaman Login</h1>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' placeholder='Masukkan Email' required />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='Masukkan Password' required />
                </div>

                <div>
                    <button type='submit'>Login</button>
                    <button type="button" onClick={googleSignIn}>Google Login</button>
                </div>

                <small >
                    Belum Punya Akun? <Link to={"/register"}>Register in here..</Link>
                </small>

            </form>

        </div>
    )
}
