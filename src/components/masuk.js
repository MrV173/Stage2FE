import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

const style = {

    login : {
        width : "430px",
        height : "520px",
        backgroundColor : "white",
    },

    button : {
        backgroundColor : "#EC7AB7",
        width : "150px",
        alignItems : "center",
        justifyContent : "center",
        borderRadius: "20px",

    }

    
}

export default function Login () {
    return (
        <div style={style.login}>
            <h2>LOGIN</h2>
            <div>
                
            <FloatingLabel controlId="floatingName" label="Name">
            <Form.Control type="text" placeholder="Name" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingName" label="Name">
            <Form.Control type="text" placeholder="Name" />
            </FloatingLabel>

            <Button type="submit" style={style.button}>
                Login
            </Button>
            </div>
        </div>
    )
}