import React, {Component} from "react"

class ApartmentIndex extends Component {
  render () {
    return (
      <>
      <h1>Apartments</h1>
      {this.props.apartments && this.props.apartments.map(apartment => {
        return(
        <p key={apartment.id}>
        <NavLink to={`/apartmentprofile/${apartment.id}`}>{apartment.street}</NavLink>
        </p>
      )
      })}
      </>
    )
  }
}

export default ApartmentIndex
