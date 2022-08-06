import {Container} from 'react-bootstrap';

const FooterComponent = () => {
return (    
        <footer className='bg-light text-center text-lg-start text-light bg-dark py-4'>
            <Container className='d-flex justify-content-between align-items-center'>
                <h4 className='d-flex justify-content-start col-md-4'>About us</h4>
                <div className='d-flex justify-content-center col-md-4 flex-column'>
                    <h3 className='text-center'>Chile precioso</h3>
                    <p className='text-center'>Una pequeña vista de los paisajes naturales que se pueden encontrar en nuestro hermoso pais, 
                    destinos a los que cualquier turista, debería visitar para enamorarse de nuestras tierras.</p>   
                </div>
                <h4 className='d-flex justify-content-end col-md-4 m-5 text-light'><a  href='mailto:ExperienciaChile@gmail.com' className="text-light text-decoration-none">Contactanos</a></h4>
            </Container>
        </footer>
    )
}

export default FooterComponent;