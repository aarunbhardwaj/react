
import react, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Alert } from 'react-bootstrap';

class Expression extends Component {
  render() {
    return (
      <div className="App">
        <Container>
        <Row>
    <Col sm={8}> 
    <Alert variant="success">
  <Alert.Heading>  <h1>{1+901}</h1></Alert.Heading>
  
   
</Alert>
    </Col>
    <Col sm={4}>sm=4</Col>
  </Row>
   
</Container>
      </div>
    );
  }
}
 

 
export default Expression;