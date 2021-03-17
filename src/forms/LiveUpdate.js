import React from 'react';
import { Container, Row,Col,Form } from 'react-bootstrap';
class LiveUpdate extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }
   render() {
      return (
         <div>
              <Container>
                 <Row>
                     <Col>

                     <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Enter Your Name</Form.Label>
    <Form.Control type="text" value = {this.state.data} 
               onChange = {this.updateState} />
     
  </Form.Group>

   
</Form>


                 
            <h4>{this.state.data}</h4>
                     </Col>
                 </Row>
             </Container>
             
           
         </div>
      );
   }
}
export default LiveUpdate;