import React, {Component} from "react"
import background from '../assets/apartment.jpeg'

class Home extends Component {
  render () {
    return (
      <>
      <img src={background} alt="outside of apartment" className="apartment-background"/>
        <div className="home">
        <h1>Welcome to Apartment Finder!</h1>
        <a href="/apartmentIndex">Check out available apartments</a>
        <p> How the site works; it's as eas as 1-2-3!</p>
          <p>Browse from our multitude of apartments.</p>
          <p>Create an account to view more information and save your preferred apartment.</p>
          <p>Contact us to schedule a viewing.</p>
        </div>
      </>
    )
  }
}

export default Home
