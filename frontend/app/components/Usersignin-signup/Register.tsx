import React, { useState, useEffect } from 'react';
import './Register.css';
import Link from 'next/link';
import User from '../../models/user';
import { useRouter } from 'next/router';
import signup from '../../api/signup';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    // const router = useRouter();


    useEffect(() => {
        const backgroundTimer = setInterval(changeBackground, 5000);

        return () => clearInterval(backgroundTimer);
    }, []);

    const changeBackground = () => {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        const backgroundImage = `url('/images/background${randomNumber}.png')`;

        const backgroundContainer = document.getElementById('backgroundContainer');

        if (backgroundContainer) {
            backgroundContainer.style.background = `
          linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          ${backgroundImage}
        `;
            backgroundContainer.style.backgroundSize = 'cover';
            backgroundContainer.style.marginTop = '50px';
            backgroundContainer.style.transition = '1s ease';
        }
    };

    const onFormSubmitted = async(e:any) =>{
        e.preventDefault();
        const id = v4();
        const user:User = {
            user_id: id,
            user_name:username,
            Email:email,
            Password:password,
            role_id: 1
        };

        const isValidPassword =()=>{
            let countNumber = 0, countUppercaseLetter = 0, countLowercaseLetter = 0, countSymbol = 0;
      
            if (password.length < 8 || password.length > 30) {
                alert('Password Length Must be between 8 - 30');
                return false;
            }
            
            for (let i = 0; i < password.length; i++){

                if (password[i] >= '0' && password[i] <= '9') countNumber++;
                else if (password[i] >= 'A' && password[i] <= 'Z') countUppercaseLetter++;
                else if (password[i] >= 'a' && password[i] <= 'z') countLowercaseLetter++;
                else countSymbol++;

            }

            if (countNumber <= 0) alert('Password Must Contain Number');
            else if (countUppercaseLetter <= 0) alert('Password Must Contain Uppercase Letter');
            else if (countLowercaseLetter <= 0) alert('Password Must Contain Lowercase Letter');
            else if (countSymbol <= 0) alert('Password Must Contain Symbol');

            return countNumber > 0 && countUppercaseLetter > 0 && countLowercaseLetter > 0 && countSymbol > 0;
        }

        if (isValidPassword()){

            const response:any = await signup(user);
            console.log(response)
            if (response === -1) alert('Sign Up Failed, Due to Server Error');
            else if (response === -2) alert('Email Already Used');
            else if (response === -3) alert('Phone Number Already Used');
            else {
              alert('Account Created');
              navigate('/signIn')
            //   router.push('/signIn');
            }
            
          }
    
    }

    return (
        <form className="register-container" onSubmit={onFormSubmitted}>
            <div id="backgroundContainer" className="register-background"></div>
            <div className="brand">
                <Link href='/'><strong className='log'>Trick</strong><strong className='ogo'>Tix</strong></Link>
            </div>
            <div className='form-regis'>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required
                    />
                </div>
                <button type="submit">
                    Register
                </button>
            </div>
        </form>
    );
};

export default Register;