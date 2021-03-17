import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
class UpdateStateFromChildComponent extends React.Component {
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
                     <Content myDataProp = {this.state.data} 
               updateStateProp = {this.updateState}></Content>
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
         <div>
            <input type = "text" value = {this.props.myDataProp} 
               onChange = {this.props.updateStateProp} />
            <h3>{this.props.myDataProp}</h3>
         </div>
      );
   }
}
export default UpdateStateFromChildComponent;