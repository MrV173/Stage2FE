import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

 const style = {
    register : {
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
export default function Register () {
    return (
        <div style={style.register}>
            <h2> Daftar </h2>

            <FloatingLabel controlId="floatingName" label="Name">
            <Form.Control type="text" placeholder="Name" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingUsername" label="Username">
            <Form.Control type="text" placeholder="Username" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingEmail" label="Email">
            <Form.Control type="email" placeholder="Email" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

            <Button type="submit" style={style.button}>
                Sign Up
            </Button>
        </div>
    )
}