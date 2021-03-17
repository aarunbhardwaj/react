import react, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Alert } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
        <Row>
    <Col sm={8}> 
    <Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert>
    </Col>
    <Col sm={4}>sm=4</Col>
  </Row>
  <Row>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
  </Row>
</Container>
      </div>
    );
  }
}

export default App;
