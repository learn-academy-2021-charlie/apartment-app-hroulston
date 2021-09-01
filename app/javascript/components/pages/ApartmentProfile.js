import React, {Component} from "react"

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
      // Fix button so it sends an email to the property manager's email
      </div>
      <h1>{this.props.street}</h1>
      <h2>{this.props.city}</h2>
      <h2>{this.props.state}</h2>
      <h3>{this.props.price}</h3>
      <p>Bedrooms: {this.props.bedrooms}</p>
      <p>Bathrooms: {this.props.bathrooms}</p>
      <p>Pets: {this.props.pets}</p>
      <p>Property Manager: {this.props.manager}</p>
      <p>Manager Contact: {this.props.email}</p>


      </>
    )
  }
}

export default ApartmentProfile
// Still need to add button to save this apartment to user's list
