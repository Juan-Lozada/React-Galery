import CardComponent from "./card";
import {Container, Row} from 'react-bootstrap'

const GaleryComponent = () => {
    return (
        <Container className='d-flex justify-content-center p-5'>
            <Row>
                <div className='col-md-4'>
                    < CardComponent CardTitle="Lago General Carrera y Catedral de Mármol" CardSrc="https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/08/21/0b38535c-3547-4d53-bb72-6e98e1b8ba56/una-catedral-digna-de-admirar.png"
                        CardText="Estas magnificas capillas son una formación mineral de carbonato de calcio, en las costas del lago General Carrera. Estas maravillas se encuentran ubicadas a 2 kilómetros al sureste de 
                        Puerto Río Tranquilo." />                
                </div>

                <div className='col-md-4'>
                    < CardComponent CardTitle="Parque Nacional Torres del Paine" CardSrc="https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/08/21/47eab249-7f82-4547-ba63-e8651e21458d/las-torres-de-paine.png"
                        CardText="Infantable en cualquier lista, uno de los pesos pesados en el panorama natural de Chile. Ubicado a 150 km de Puerto Natales, atrae a miles de turistas y enamorados del trekking." />
                </div>

                <div className='col-md-4'>
                    < CardComponent CardTitle="Volcán de osorno" CardSrc="https://tipsparatuviaje.com/wp-content/uploads/2019/03/volcan-osorno.jpg" CardText="Es el centinela natural que custodia el acceso a la 
                        Patagonia chilena y uno de los más visitados en el país. Está a orillas del Lago Llanquihue cerca de la ciudad de Osorno, en la Región de Los Lagos. Guarda un fuerte parecido con el famoso 
                        Monte Fuji japonés." />                
                </div>
            </Row>
        </Container>
    )
}

export default GaleryComponent;