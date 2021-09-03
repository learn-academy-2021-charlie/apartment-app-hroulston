import React, {Component} from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class ApartmentProfile extends Component {
  constructor(props){
        super(props)
        this.state = {
          success: false
        }
      }

  handleSubmit = () => {
    this.props.deleteApartment(this.props.apartment.id)
    this.setState({ success: true })
    }
  render () {
    return (
      <>

      <div className="profile_links">
      <a href="/apartmentIndex">Back To List</a>
      </div>
      <div className="appointment_maker">
      <h3>Book an Appointment!</h3>
        <FormGroup className="form">
          <Label for="date">Date</Label>
          <Input
            type="date"
            name="date"
            id="date"
            placeholder="date placeholder"
          />
        </FormGroup >
        <FormGroup className="form">
        <Label for="time">Time</Label>
        <Input
          type="time"
          name="time"
          id="time"
          placeholder="time placeholder"
        />
      </FormGroup>
      <br />
      <Button>Submit</Button>
      <br />
      </div>
      <h1>{this.props.apartment.street}</h1>
      <h2>{this.props.apartment.city}, {this.props.apartment.state}</h2>
      <h3>${this.props.apartment.price}</h3>
      <p>Bedrooms: {this.props.apartment.bedrooms}</p>
      <p>Bathrooms: {this.props.apartment.bathrooms}</p>
      <p>Pets: {this.props.apartment.pets}</p>
      <p>Property Manager: {this.props.apartment.manager}</p>
      <p>Manager Contact: {this.props.apartment.email}</p>

      <NavLink to="/apartmentIndex" >
        <Button onClick={ this.handleSubmit }>
          Delete Apartment
        </Button>
      </NavLink>
      { this.state.success && <Redirect to="/apartmentIndex" />}


      </>
    )
  }
}

export default ApartmentProfile
// Still need to add button to save this apartment to user's list
