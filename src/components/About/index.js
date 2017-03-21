import React, { Component } from 'react';
import classnames from 'classnames';
import {Row, Col} from 'reactstrap';

import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';

class App extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render () {
    const {className, ...props } = this.props;
    return (
      <div className={classnames('GenInfo', AboutUs)} {...props}>

        <Row className="AboutUs">
        <Col class="col-sm-12 col-md-12">
          <h1 class="title">About Us</h1>
        </Col>
        </Row>

        <Row className="AboutUs">
        <Col class="col-sm-12 col-md-6">
          <p>
            We are a group of individuals who work hard and who believe others
            can do well when given the chance. When a college or university
            loses accreditation, everyone loses. Not only do the students who
            attend those schools lose out by the money they have lost while
            attempting to attend, they also lose the ability to transfer all
            credits they earned at the school somewhere else. If a student were
            at the point of graduation, not only would they lose the chance for
            a diploma, they lose all of the hard work they put into getting the
            diploma.
          </p>
        </Col>

        <Col class="col-sm-12 col-md-6">
          <p>
            There are students who travel from one side of this country to the
            other to find a good school, there are students who jump hoops to
            gain an educational Visa or Green Card because they see the schools
            here as top notch. When these issue occur, not only do people
            outside of the country notice, the citizens will notice, and the
            combination of make our best schools look bad.
          </p>
        </Col>
        </Row>

        <Row className="AboutUs">
        <Col class="col-sm-12 col-md-4"></Col>

        <Col class="col-sm-12 col-md-4">
          <h2 class="Now">This has to stop now!</h2>
        </Col>

        <Col class="col-sm-12 col-md-4"></Col>
        </Row>

        <Row className="AboutUs">
        <Col class="col-sm-12 col-md-6">
          <p>
            We are helping the cause by providing the means a person can look up
            the various schools, see ratings, comments, and most importantly,
            what accreditation does the school have. There will also be info
            about the school to help the students plan the cost of attendance
            and if the school if good enough to hold out for the
            2 years (AA degree)-5 years (BS/BA degree) the student would expect.
          </p>
        </Col>

        <Col class="col-sm-12 col-md-6">
          <p>
            It is a small step to assist in what is potentially becoming a
            larger problem. Our group wants to help, and this is our gift to
            others to help. Feel free to create an account and help us and
            others with this project!
          </p>
        </Col>
        </Row>

    </div></div>
  );
}

export default About;
