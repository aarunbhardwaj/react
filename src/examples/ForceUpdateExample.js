import React from 'react';

import { Container, Row,Col,Button } from 'react-bootstrap';

class ForceUpdateExample extends React.Component {
   constructor() {
      super();
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
   };
   forceUpdateHandler() {
      this.forceUpdate();
   };
   render() {
      return (
         <div>

<Container>
                 <Row>
                     <Col>
                     
            <Button onClick = {this.forceUpdateHandler}>FORCE UPDATE</Button>
            <h4>Random number: {Math.random()}</h4>
                     </Col>
                 </Row>
             </Container>

           
         </div>
      );
   }
}
export default ForceUpdateExample;
