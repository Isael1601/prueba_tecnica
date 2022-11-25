import React, { Fragment, useState} from "react";
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';
import NavBar from "../NavBar/NavBar";


const Tienda = () => {

    const url = `https://hat-application-01.herokuapp.com/quotation`

    const [datos, setDatos] = useState ({
        name: '',
        sucursal: '',
        adress: '',
        number:'',
        colo: '',
        mun: ''
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
            <h1>Regitra tu tiena</h1>
            <p>Recuerda llenar todas las casillas</p>
        </div>

        <Fragment>
            <Form className="m-5" onSubmit={enviarDatos}>
                <Row xs={1} md={2} className="m-1">
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Tienda</Form.Label>
                    <Form.Control type="text"
                    placeholder="Nombre de la tienda" 
                    className="form-control"
                    name='name'
                    onChange={handleInputChage}
                    
                    />

                    
                </Form.Group>
                

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Sucursal</Form.Label>
                    <Form.Control type="text"
                    placeholder="Sucursal" 
                    className="form-control"
                    name='sucursal'
                    onChange={handleInputChage}
                    />
                </Form.Group>
                </Row>

                <Row xs={1} md={2} className="m-1" >
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control type="Text" 
                    placeholder="Calle" 
                    className="form-control"
                    name='adress'
                    onChange={handleInputChage}
                    />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>#</Form.Label>
                    <Form.Control type="number"
                    placeholder="Numero"
                    className="form-control"
                    name='number'
                    onChange={handleInputChage}
                    />
                    </Form.Group>
                </Row>

                <Row xs={1} md={2} className="m-1" >
                    <Col>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="Text" 
                    placeholder="Colonia" 
                    className="form-control"
                    name='colo'
                    onChange={handleInputChage}
                    />
                    </Form.Group>
                    </Col>

                    <Col>   
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="Text" 
                    placeholder="Municipio" 
                    className="form-control"
                    name='mun'
                    onChange={handleInputChage}
                    />
                    </Form.Group>
                    </Col> 
                </Row>

                <Button className="m-4 " variant="primary" type="submit">
                    Enviar
                </Button>
            </Form> 
            </Fragment>

        </>
    );
};

export default Tienda;