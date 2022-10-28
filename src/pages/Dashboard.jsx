import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth"
import { auth } from '../config/FirebaseConfig'


export default function Dashboard() {

    // mendeklarasikan navigation variabel
    const navigation = useNavigate();

    // sign out function
    const signOutFromApp = () => {
        signOut(auth)
            .then((res) => {
                navigation("/")
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div>
            <h1>Halaman Dashboard</h1>
            <button onClick={signOutFromApp}>Logout</button>
        </div>
    )
}
