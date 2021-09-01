import React, {Component} from "react"

class Home extends Component {
  render () {
    return (
      <>
        <div className="home">
        <h1>Welcome to Apartment Finder!</h1>
        <a href="/apartmentIndex">Check out available apartments</a>
        <p> How the site works; it's as eas as 1-2-3!:</p>
        <ol>
          <li>Browse from our multitude of apartments.</li>
          <li>Create an account to view more information and save your preferred apartment.</li>
          <li>Contact us to schedule a viewing.</li>
        </ol>
        </div>
      </>
    )
  }
}

export default Home
