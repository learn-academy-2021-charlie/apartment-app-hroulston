import React, {Component} from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class ApartmentProfile extends Component {
  render () {
    return (
      <>

      <div className="profile_links">
      <a href="/apartmentIndex">Back To List</a>
      </div>
      <div className="appointment_maker">
      <h3>Book an Appointment!</h3>
        <FormGroup>
          <Label for="date">Date</Label>
          <Input
            type="date"
            name="date"
            id="date"
            placeholder="date placeholder"
          />
        </FormGroup>
        <FormGroup>
        <Label for="time">Time</Label>
        <Input
          type="time"
          name="time"
          id="time"
          placeholder="time placeholder"
        />
      </FormGroup>
      <Button>Submit</Button>
      </div>
      <h1>{this.props.apartment.street}</h1>
      <h2>{this.props.apartment.city}</h2>
      <h2>{this.props.apartment.state}</h2>
      <h3>{this.props.apartment.price}</h3>
      <p>Bedrooms: {this.props.apartment.bedrooms}</p>
      <p>Bathrooms: {this.props.apartment.bathrooms}</p>
      <p>Pets: {this.props.apartment.pets}</p>
      <p>Property Manager: {this.props.apartment.manager}</p>
      <p>Manager Contact: {this.props.apartment.email}</p>


      </>
    )
  }
}

export default ApartmentProfile
// Still need to add button to save this apartment to user's list
