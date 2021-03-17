import react, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Alert } from 'react-bootstrap';

class App extends Component {
  render() {
      var i=1;
    return (
      <div className="App">
        <Container> 
        <Row>
    <Col sm={8}> 
    <Alert variant="success">
  <Alert.Heading>//we cannt use if-else in JSX</Alert.Heading>
 
  <h1>{i == 1 ? 'True!' : 'False'}</h1>
 
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert>
    </Col>
    <Col sm={4}>sm=4</Col>
  </Row>
   
</Container>
      </div>
    );
  }
}

export default App;
