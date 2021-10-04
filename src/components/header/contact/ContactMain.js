import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './ContactMain.css'
const ContactMain = () => {
    return (
        <div>
            <CardGroup>
  <Card>
    <Card.Img variant="top" className="contact-image" src="https://png.pngitem.com/pimgs/s/146-1466755_nearby-transparent-background-address-icon-hd-png-download.png" />
    <Card.Body>
      <Card.Title><h1 className="card-title">Office Address
</h1>
</Card.Title>
      <Card.Text>
        <h3 className="card-des">15/9, Indira Road, Farmgate</h3>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top"className="contact-image" src="https://media.istockphoto.com/vectors/phone-icon-call-application-symbol-green-round-button-flat-interface-vector-id1250911025?k=20&m=1250911025&s=170667a&w=0&h=1aZJUHR8KVcvWKyVaufUdR8yN_r5VqTCfyGNx8pdOAY=" />
    <Card.Body>
      <Card.Title><h1 className="card-title">Phone Us
</h1>
</Card.Title>
      <Card.Text className="card-des">
      <h5>Hotline: 0800 50020 </h5>
<h5>Mobile: 880 1814803281</h5>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" className="contact-image" src="data:image/png;base64,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" />
    <Card.Body>
      <Card.Title><h1 className="card-title">Send Message
</h1>
</Card.Title>
      <Card.Text>
        <h5 className="card-des">ekramul15-811@diu.edu.bd</h5>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
    );
};

export default ContactMain;