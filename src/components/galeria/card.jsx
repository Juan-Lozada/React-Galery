import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardComponent = (props) => {
  return (
    <Card className='p-4 m-4 border-dark bg-dark text-light' style={{height: '35rem'}}>
      <Card.Img variant="top" src={props.CardSrc}></Card.Img>
      <Card.Body className='d-flex flex-column justify-content-center text-center'>
        <Card.Title>{props.CardTitle}</Card.Title>
        <Card.Text className='text-secondary'>
        {props.CardText}
        </Card.Text>
        <Button className='border-dark btn-secondary text-ligth bg-secondary '>Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;