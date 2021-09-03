import React, {Component} from "react"
import { NavLink } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import aptphoto from "../assets/apartment_bg.jpeg"

class ApartmentIndex extends Component {
  render () {
    return (
      <>
      <h1>Apartments</h1>
      {this.props.apartments && this.props.apartments.map(apartment => {
        return(
      <Card key={apartment.id} className="cards">
        <CardImg top width="100%" src={aptphoto} alt="Inside apartment" />
        <CardBody>
          <CardTitle tag="h5">{apartment.street}, {apartment.city}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{apartment.price}</CardSubtitle>
          <CardText>This beautiful {apartment.bedrooms} bedroom and {apartment.bathrooms} bath apartment is located in the charming town of {apartment.city}. Don't wait too long, this sought after place will go quick!</CardText>
          <NavLink to={`/apartmentprofile/${apartment.id}`}>
          <Button >Button</Button>
          </NavLink>
        </CardBody>
      </Card>

      )
      })}
      </>
    )
  }
}

export default ApartmentIndex
