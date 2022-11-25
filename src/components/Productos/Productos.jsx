import React, { Fragment, useState} from "react";
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';
import NavBar from "../NavBar/NavBar";


const Productos = () => {

    const url = `https://hat-application-01.herokuapp.com/quotation`

    const [datos, setDatos] = useState ({
        code: '',
        description: '',
        Pice:'',
        img: '',
        stock: ''
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
            <h1>Regitra tus productos</h1>
            <p>Recuerda llenar todas las casillas</p>
        </div>

        <Fragment>
            <Form className="m-5" onSubmit={enviarDatos}>
                <Row xs={1} md={2} className="m-1">
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Code</Form.Label>
                    <Form.Control type="text"
                    placeholder="product" 
                    className="form-control"
                    name='code'
                    onChange={handleInputChage}
                    
                    />

                    
                </Form.Group>
                

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text"
                    placeholder="max. 150 caracther" 
                    className="form-control"
                    maxLength={150}
                    name='description'
                    onChange={handleInputChage}
                    />
                </Form.Group>
                </Row>

                <Row xs={1} md={2} className="m-1" >
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" 
                    placeholder="$" 
                    className="form-control"
                    name='price'
                    onChange={handleInputChage}
                    />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Numero</Form.Label>
                    <Form.Control type="number"
                    placeholder="#"
                    className="form-control"
                    name='img'
                    onChange={handleInputChage}
                    />
                    </Form.Group>
                </Row>

                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="Text" 
                    placeholder="Stock" 
                    className="form-control"
                    name='stock'
                    onChange={handleInputChage}
                    />
                    </Form.Group>

                <Button className="m-4 " variant="primary" type="submit">
                    Enviar
                </Button>
            </Form> 
            </Fragment>

        </>
    );
};

export default Productos;