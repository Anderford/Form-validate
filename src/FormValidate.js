import React, {useState,useEffect} from 'react';
import './formValidate.css';

const FormValidate = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [emailDirty, setEmailDirty] = useState(false)
const [passwordDirty, setPasswordDirty] = useState(false)
const [emailError, setEmailError] = useState('* Емейл не может быть пустым')
const [passwordError, setPasswordError] = useState('* Пароль не может быть пустым')
const [formValid, setFormValid] = useState(false)



useEffect(() => {
    if(emailError || passwordError) {
        setFormValid(false)
    } else {
        setFormValid(true)
    }
},[emailError,passwordError])

const blurHandler = (event) => {
    
    switch (event.target.name) {
        case 'email':
            setEmailDirty(true)
            break
        case 'password':
            setPasswordDirty(true)
            break
        default:
    }
}

const emailHandler = (event) => {
    setEmail(event.target.value)
    const re =/.+@.+\..+/i
    if (!re.test(String(event.target.value).toLowerCase())) {
        setEmailError('* Некорректный емейл')
    } else {
        setEmailError('')
    }
}

const passwordHandler = (event) => {
    setPassword(event.target.value)
    const pass = /^\S{8,}$/
    if (!pass.test(String(event.target.value))) {
        setPasswordError('* Пароль должен быть больше 8-ми символов')
        if (!event.target.value) {
            setPasswordError('* Пароль не может быть пустым')
        }
    } else {
        setPasswordError('')
    }
}

    return ( 
        <div className='formValidatePage'>
            <h2 className='formValidateTitle'>Iliasheg <br></br> pet project</h2>
            <form className = 'formValidate'>
               
                <input  className =' formValidateItem'
                        onBlur = {event => blurHandler(event)}
                        onChange = {event => emailHandler(event)}
                        value = {email}
                        name = 'email' 
                        type = 'text' 
                        placeholder = 'Имя аккаунта'>  
                </input>
                {(emailDirty && emailError) && <div className='errorMessage'>{emailError}</div>}

               
                <input  className = 'formValidateItem' 
                        onBlur = {event => blurHandler(event)}
                        onChange = {event => passwordHandler(event)}
                        value = {password}
                        name = 'password' 
                        type = 'password' 
                        placeholder = 'Пароль'>
                </input>
                {(passwordDirty && passwordError) && <div className='errorMessage'>{passwordError}</div>}
               
                <button className='formValidateBtn'
                        disabled = {!formValid}
                        type='submit'>
                        Войти
                 </button>
            </form>
        </div>
    )
}


export default FormValidate;