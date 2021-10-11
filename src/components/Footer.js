import React from 'react';
import '../index.css';
import {Container,Row,Col} from 'reactstrap';
import Contact from './Contact';
import user from "../images/user.jpg";

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
<Container>
    <Row>
        <Col>
        <img src={user}  width="90" height="90" alt="Susan Wairimu"/>
        <p>
            Tel: +254796486115
        </p>
        <p>
            Email: susanwairimu177@gmail.com
        </p>
        </Col>
    </Row>
</Container>
<Container>
    <Row>
        <Col>
        <p> Copyright &copy;  2021.  All Rights Reserved</p>
        </Col>
    </Row>
</Container>
</footer>
);
}

export default Footer;
