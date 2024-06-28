import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import logo from "../../../assets/myImage/Logo/Pritam Garage (1).jpg"

const LoginScreen = () => {

    const [ userFormData, setUserFormData ] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setUserFormData((previous) => {
            return{
                ...previous,
                [name] : value
            }
        })
    }

    console.log("user data is: ", userFormData);



  return (
    <LoginBox>
        <div className='login-parent'>
            <div className='form-box'>
                <div className='image'>
                    <img src={logo} alt='logo'/>
                </div>

                <form>
                    <div className='name-div'>
                        <label>Name: </label>
                        <div>
                            <input type="text" name='name' value={userFormData.name} onChange={handleOnChange} placeholder='enter your name' className='input-name'/>
                        </div>
                    </div>

                    <div className='email-div'>
                        <label>Email: </label>
                        <div>
                            <input type="email" name='email' value={userFormData.email} onChange={handleOnChange} placeholder='enter your Email' className='input-email'/>
                        </div>
                    </div>

                    <div className='username-div'>
                        <label>Username: </label>
                        <div>
                            <input type="text" name='username' value={userFormData.username} onChange={handleOnChange} placeholder='enter your Username' className='input-username'/>
                        </div>
                    </div>

                    <div className='password-div'>
                        <label>Password: </label>
                        <input type="password" name='password' value={userFormData.password} onChange={handleOnChange} placeholder='enter your password' className='input-password'/>
                    </div>

                    <div className='confirmpassword-div'>
                        <label>Confirm Password: </label>
                        <div>
                            <input type="password" name='confirmPassword' value={userFormData.confirmPassword} onChange={handleOnChange} placeholder='enter your password again' className='input-confirmPassword'/>
                        </div>
                    </div>

                    <button className='button'>Signup</button>
                </form>
            </div>
        </div>
    </LoginBox>
  )
}

export default LoginScreen;

const LoginBox = styled.section`
    img{
        width: 60px;
    }

    .login-parent{
        margin-left: auto;
        margin-right: auto;

        .form-box{
            margin-left: auto;
            margin-right: auto;
            padding: 20px;
            max-width: 28rem;

            padding-top: 4rem;
            padding-bottom: 4rem;

            .image{
                width: 20px;
                height: 20px;
                margin-left: auto;
                margin-right: auto;
            }
        }

        .name-div{
            display: grid;
        }

        .input-name, .input-email, .input-username, .input-password, .input-confirmPassword{
            width: 100%;
            height: 100%;
            outline: none;
        }

    }

    .button{
        background-color: red;
        color: #fff;
        border-radius: 5px;
        padding: 2px 6px 2px 6px;

        &:hover{
            transform: scale(1.2);
        }
    }
`;