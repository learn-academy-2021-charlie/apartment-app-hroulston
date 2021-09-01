import React, {Component} from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Contact extends Component {
  render () {
    return (
      <>
        <p className="contact">
          <FormGroup className="subject">
            <Label for="subject">Subject</Label>
            <Input type="textarea" name="subject" id="subject" />
          </FormGroup>
          <FormGroup className="info">
            <Label for="moreInfo">More Info</Label>
            <Input type="textarea" name="info" id="moreInfo" />
          </FormGroup>
          <Button className="button">Submit</Button>
        </p>
      </>
    )
  }
}

export default Contact
