import React from 'react';
import { Container, Row,Col,Button } from 'react-bootstrap';

class SetStateExample extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: []
      }
	
      this.setStateHandler = this.setStateHandler.bind(this);
   };
   setStateHandler() {
      var item = "setState..."
      var myArray = this.state.data.slice();
	  myArray.push(item);
      this.setState({data: myArray})
   };
   render() {
      return (
         <div>
             <Container>
                 <Row>
                     <Col>
                      <Button onClick = {this.setStateHandler}>SET STATE</Button>
            <h4>State Array: {this.state.data}</h4>
                     </Col>
                 </Row>
             </Container>
           
         </div>
      );
   }
}
export default SetStateExample;