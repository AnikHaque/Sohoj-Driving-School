import React from 'react';
import { Card, Col, Container, Row,Button, CardGroup} from 'react-bootstrap';
import Footer from '../footer/Footer';
import './Tutor.css'
const Tutor = () => {
    return (
        <div>
<h1 className="tutor-heading">Who will make <br></br> You Expert in Driving </h1>

<Container fluid className="bg-tutor">
  <Row>
    <Col>
    <CardGroup>
  <Card className="mb-5">
    <Card.Img variant="top" className="image" src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/183472609_1246090785805314_8053411928898037598_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=5I4w5P4MK08AX-cv2WQ&_nc_ht=scontent.fdac27-1.fna&oh=01174d3a053e7896388ffc01775556c6&oe=6181B4E0" />
    <Card.Body>
      <Card.Title><h2>Ekramul Haque Anik</h2></Card.Title>
      <Card.Text className="tutor-details">
        Expert in Highway Driving
      </Card.Text>
    </Card.Body>
   
  </Card>
  
</CardGroup>
    </Col>
    <Col> 
     <CardGroup>
  <Card>
    <Card.Img variant="top" className="image" src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/145283969_1125913571183020_8309763262126877496_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=c8PTZEx_zscAX-9MkXo&_nc_ht=scontent.fdac27-1.fna&oh=a74d228f957814e6fa508df6e2d44c31&oe=61825671" />
    <Card.Body>
      <Card.Title><h2>Md. Arafat</h2></Card.Title>
      <Card.Text className="tutor-details">
        Expert in International Driving
      </Card.Text>
    </Card.Body>
   
  </Card>
  
</CardGroup></Col>
    <Col>  <CardGroup>
  <Card>
    <Card.Img variant="top"className="image" src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/83205232_864605083969078_3462447800464179200_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=uuFrHoZaq9IAX8Rh326&tn=VBGwhZHhNhNQWhie&_nc_ht=scontent.fdac27-1.fna&oh=fc2b34d549937300060c260a457c42ca&oe=618178F6" />
    <Card.Body>
      <Card.Title><h2>Jannatul Mahiya</h2></Card.Title>
      <Card.Text className="tutor-details">
        Expert in Safe & Defensive Driving
      </Card.Text>
    </Card.Body>
   
  </Card>
  
</CardGroup></Col>
  </Row>
  <Row>
    <Col>  <CardGroup>
  <Card>
    <Card.Img variant="top" className="image" src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/120333531_868668013958644_7856857100768810154_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nHHPr3YC6LMAX8GUVw5&_nc_ht=scontent.fdac27-1.fna&oh=81aa5075757fdbfeb7a0c9a59abd933f&oe=61816279" />
    <Card.Body>
      <Card.Title><h2>Md.Abdur Rahman</h2></Card.Title>
      <Card.Text className="tutor-details">
        Expert in Speedy Driving
      </Card.Text>
    </Card.Body>
   
  </Card>
  
</CardGroup></Col>
    <Col>  <CardGroup>
  <Card>
    <Card.Img variant="top" className="image" src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/84645600_423459561945076_8191610754971022009_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=kfx2ls_wenMAX8F5JUx&_nc_ht=scontent.fdac27-1.fna&oh=38b311650876b395fcde297ea10ba63f&oe=617EF721" />
    <Card.Body>
      <Card.Title><h2>Apurba Taluker</h2></Card.Title>
      <Card.Text className="tutor-details">
        Expert in Sudden Break, disciplined Driving & Horns
      </Card.Text>
    </Card.Body>
 
  </Card>
  
</CardGroup></Col>
    <Col>  <CardGroup>
  <Card>
    <Card.Img variant="top" className="image" src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/83397789_1044474135913995_1037088362642538496_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=X93QVWQ7zk4AX_o1cip&_nc_ht=scontent.fdac27-1.fna&oh=f1f5db17a332ed5090e5c981b814a9a8&oe=617F9A71" />
    <Card.Body>
      <Card.Title><h2>Md.</h2></Card.Title>
      <Card.Text className="tutor-details">
        Expert in Automatic Car Driving
      </Card.Text>
    </Card.Body>
    
  </Card>
  
</CardGroup>
</Col>
  </Row>
</Container>
 

  
<Footer></Footer>
        </div>
    );
};

export default Tutor;