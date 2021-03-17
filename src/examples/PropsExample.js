import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';

class PropsExample extends React.Component {
   render() {
      return (
         <div>
            <Container>
               <Row>
                  <Col>
                  <h1>{this.props.headerProp}</h1>
            
                  </Col>
                  <Col>
                  <h2>{this.props.contentProp}</h2>
                  </Col>
               </Row>
            </Container>
            
         </div>
      );
   }
}
PropsExample.defaultProps = {
   headerProp: "Header from props...",
   contentProp:"Content from props..."
}
export default PropsExample;