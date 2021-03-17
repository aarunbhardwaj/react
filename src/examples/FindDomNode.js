import React from 'react';
import ReactDOM from 'react-dom';

import { Container, Row,Col,Button } from 'react-bootstrap';


class FindDomNode extends React.Component {
   constructor() {
      super();
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   };
   findDomNodeHandler() {
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'red';
   }
   render() {
      return (

         <div>

<Container>
                 <Row>
                     <Col>
                     <Button onClick = {this.findDomNodeHandler}>FIND DOME NODE</Button>
            <div id = "myDiv">NODE</div>
                     </Col>
                 </Row>
             </Container>


           
         </div>
      );
   }
}
export default FindDomNode;