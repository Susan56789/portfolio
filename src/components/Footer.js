import React from 'react';
import '../index.css';
import {Container,Row,Col} from 'reactstrap';
import Contact from './Contact';


function Footer(){
return(
<footer className="footer">
<Container>
    <Row>
      <Col>
      <Contact />
      </Col>  
    </Row>
</Container>
</footer>
);
}

export default Footer;
