import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebaseConfig'
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {

    const navigate = useNavigate()

    const handleRegister = (e) => {

        // stop reload page
        e.preventDefault()

        // mengambil id form
        const email = e.target.email.value;
        const password = e.target.password.value;
        const password2 = e.target.password2.value;

        if (!email || !password || !password2) {
            return alert('Sesuaikan mas bro')
        }

        if (password !== password2) {
            return ('Password Harus sama')
        }

        if (password.length < 6) {
            return alert('Password harus lebih dari 6 character')
        }

        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <div>
            <form action="" onSubmit={handleRegister} className='flex flex-col w-full min-h-screen justify-center items-center' autoComplete='off'>

                <h1>Halaman Register</h1>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder='Masukkan Email' required />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='Masukkan Password' required />
                </div>

                <div>
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" id='password2' placeholder='Confirm Password' required />
                </div>

                <div>
                    <button type='submit'>Register</button>
                </div>

                <small className='text-bold'>
                    Sudah Punya Akun? <Link to={"/"}>Login in here..</Link>
                </small>

            </form>
        </div>
    )
}
