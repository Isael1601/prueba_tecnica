import NavBar from "../NavBar/NavBar";
import {Row} from "react-bootstrap"
import "../Inicio/inicio.scss";


const Inicio = () => {
    return(
        <>
        <NavBar/>

        <Row className="jumbotron">
            <h1 className="text">Tienda Virtual</h1>
        </Row>
        </>
    )
}

export default Inicio; 