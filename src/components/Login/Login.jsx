import React, { Fragment, useState} from "react";
import axios from 'axios';
import { Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
import { Form, Row, Button } from 'react-bootstrap';
import NavBar from "../NavBar/NavBar";


const Login = () => {

    const url = `https://hat-application-01.herokuapp.com/quotation`

    const [datos, setDatos] = useState ({
        email: '',
        password: ''
    })

    const handleInputChage = (event) => {
        setDatos ({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        axios.post(url, datos);
        console.log(datos.name + '' + datos.lastname + '' + datos.adress);
        
    }
 

    return (
        <>
        <NavBar />

        <div className="text-center">
            <h1>Iniciar Sesion</h1>
            <p>Si no estas registrado, haz click en: <Nav.Link as={Link} to='/Clientes'>Regitrate</Nav.Link></p>
        </div>

        <Fragment>
            <Form className="m-5" onSubmit={enviarDatos}>
                <Row xs={1} md={2} className="m-1">
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text"
                    placeholder="Correo electronico" 
                    className="form-control"
                    name='name'
                    onChange={handleInputChage}
                    
                    />
                </Form.Group>
                

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password"
                    placeholder="Contraseña" 
                    className="form-control"
                    name='lastname'
                    onChange={handleInputChage}
                    />
                </Form.Group>
                </Row>
                <Button className="m-4 " variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            </Fragment>

        </>
    );
};

export default Login;
