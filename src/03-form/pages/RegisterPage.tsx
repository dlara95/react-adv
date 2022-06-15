import React from 'react'
import '../styles/styles.css'

export const RegisterPage = () => {

    const [registerData, setRegisterData] = React.useState({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })

    const { name, email, password1, password2 } = registerData

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = event.target

        setRegisterData({
            ...registerData,
            [name]: value
        })

    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(registerData)
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form noValidate onSubmit={onSubmit}>
                <input type="text"
                    placeholder='Name'
                    value={name}
                    name='name'
                    onChange={onChange}
                />
                <input type="email" placeholder='Email'
                    value={email}
                    name='email'
                    onChange={onChange} />
                <input type="password" placeholder='Password'
                    value={password1}
                    name='password1'
                    onChange={onChange} />
                <input type="password" placeholder='Confirm Password'
                    value={password2}
                    name='password2'
                    onChange={onChange} />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
