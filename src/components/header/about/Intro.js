import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Intro.css'
const Intro = () => {
    return (
      <div>
        <div className="intro">
            <h1 className="intro-heading">Company Overview</h1>
            <Container fluid="md">
  <Row>
  <Col>
  <img src="http://fastwpdemo.com/newwp/drivega/wp-content/uploads/2021/06/image-1-1.jpg"></img></Col>
  <Col>
  <h4>LEARN TO DRIVE SAFELY
</h4>
<h1 className="intro-title">
Affordable, Effective and Convenient Driving Lessons
</h1>
<p>
Safe Drive Driving School has designed classes with the busy student in mind. We have a very flexible system of classes that allows students to take the classes in any order they wish and at their own pace. In some schools you have a very strict schedule for taking the classes and this does not work into a lot of the current schedules of kids busy lives.
</p>
<li>
We offer convenient scheduling six days a week.

</li>
<li>
We help nervous drivers and the elderly.

</li>
<li>
We offer quality service at reasonable rates.

</li>
<li>
We offer the use of the training car for road tests.

</li>
  </Col> 
  </Row>

</Container>
        </div>
        </div>
    );
};

export default Intro;