import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/userContext";
import { API, setAuthToken } from "../../config/api";
import { useContext } from "react";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { Alert, FloatingLabel } from "react-bootstrap";


export default function Login() {
    let Navigate = useNavigate()

    const title ="Login"
    document.title = "LandTick | " + title

    const [ _ , dispatch] = useContext(UserContext)

    const [message, setMessage] = useState(null)
    const[form, setForm] = useState({
        email: "",
        password : "",
    })

    const {email, password} = form
    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = useMutation(async (e) =>{
        try {
            e.preventDefault()

            const response = await API.post("/login", form)

            console.log("login success : ", response)
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload : response.data.data
            })

         
            setAuthToken(localStorage.token)

            if (response.data.data.role === 'admin') {
                Navigate('/admin')
            } else {
                Navigate('/')
            }
            const alert = (
                <Alert variant="success" className="py-1">
                  Login success
                </Alert>
              );
              setMessage(alert);
            } catch (error) {
              const alert = (
                <Alert variant="danger" className="py-1">
                  Login failed
                </Alert>
              );
              setMessage(alert);
              console.log("login failed : ", error);
        }
    })

    return (
     <div>
        <div className='loginTitle'>Login</div>
        {message && message}
        <Form onSubmit={(e) => handleSubmit.mutate(e)}>
        <div>    
            <FloatingLabel controlId="email"label="Email"className="mb-3">
                <Form.Control type="text" placeholder='Email' className='formControl' value={email} name="email" onChange={handleChange}/>
            </FloatingLabel>
            <FloatingLabel controlId="password"label="Password"className="mb-3">
                <Form.Control type="password" placeholder='Password' value={password} name="password" onChange={handleChange}/>
            </FloatingLabel>
        </div>
        <div className='containerRegisterButton'>
            <button className='buttonRegister'>Login</button>
        </div>
        <div>
            <Form.Text>Belum punya akun? Klik Disini</Form.Text>
        </div>
        </Form>
            
     </div>
    )


}