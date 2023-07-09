import React from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


export default function Trial() {
    return (
        <div>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Username" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

      <button>
        Login
      </button>
      <Form.Text className="text-muted">
          Belum punya akun? Klik disini
        </Form.Text>
        </div>
    )
}