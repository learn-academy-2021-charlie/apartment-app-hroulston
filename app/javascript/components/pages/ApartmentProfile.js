import React, {Component} from "react"

class ApartmentProfile extends Component {
  render () {
    return (
      <>
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
