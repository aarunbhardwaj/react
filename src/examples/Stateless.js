import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Alert } from 'react-bootstrap';

class Stateless extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
        <div className="App">
        <Container>
        <Row>
    <Col  > 
     <h1>Header</h1>
    </Col>
    
  </Row>
   
</Container>
      </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
        <div className="App">
        <Container>
        <Row>
    <Col  > 
     <h1>Content</h1>
     <p>Content paragraph</p>
    </Col>
    
  </Row>
   
</Container>
      </div>
      );
   }
}
export default Stateless;