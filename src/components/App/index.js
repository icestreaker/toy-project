import React, { Component } from 'react';
import classnames from 'classnames';
import {Row, Col, Input, Label, InputGroupButton, Form, FormGroup} from 'reactstrap';

import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';

class App extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render () {
    const {className, ...props} = this.props;
    return (
      <div className={classnames('NewUser', className)} {...props}>

        <Row className="app-header">
        <Col class="col-sm-12 col-md-12">
          <h2 className="Banner" class="pop">Do you want a good education and get the bang for your buck at the school you want to attend?</h2>
          <h3 className="Banner" class="pop">You are at the right place!</h3>
        </Col>
        </Row>
        <Row className="info">
        <Col class="col-sm-12 col-md-12">
          <p>So what is going on and what are we doing to help fix the problem?</p>
        </Col>
        </Row>
        <hr />

        <Row className="Problem-Solution">
        <Col class="col-sm-12 col-md-4"><h4 class="prob-align">The Problem</h4>
          <p class="align">School is expensive, there are cases of schools being partially or fully discredited. Not knowing where the good schools to attend are vital, time saving, and money saving, and best of all, you can be sure you are attending a good school.</p>
        </Col>
        <Col class="col-sm-12 col-md-4"><h4 class="prob-align">The Solution</h4>
          <p class="align">Create a crowd-sourced database giving information about the schools, with all information being verified by administrators. The info is fast, it will be accurate, and you get an opinion of the school from various students</p>
        </Col>
        <Col class="col-sm-12 col-md-4"><h4 class="prob-align">How Do You Fit In?</h4>
          <p class="align">Sign up today! Be part of the solution to help others. If you wish to sign up for a new account, the form is just below.</p>
        </Col>
        </Row>
        <hr />

        <Row className="NewUser">
        <Col class="col-sm-12 col-md-4">
          <Form class="addUser">
            <FormGroup className="addUser" class="form-align">
              <Label class="addUser" id="email">Please enter your email:</Label>
              <Input type="text" />
              <Label class="addUser" id="password">Please type a password:</Label>
              <Input type="text" />
              <Label class="addUser" id="verify_password">Please re-type your password:</Label>
              <Input type="text" />
              <Label class="addUser">Please click to verify your new account: </Label>
              <InputGroupButton classnames="addUser">Submit</InputGroupButton>
            </FormGroup>
        </Form>
        </Col>
        </Row>

      </div>
    );
  }
}

export default App;
