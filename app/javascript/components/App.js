import React, {Component} from "react"
import PropTypes from "prop-types"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import EditApartment from './pages/EditApartment'
import NewApartment from './pages/NewApartment'
import ApartmentProfile from './pages/ApartmentProfile'
import Contact from './pages/Contact'
import UserProfile from './pages/UserProfile'

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount(){
    this.readApartment()
  }

  readApartment = () => {
    fetch("/apartments")
    .then(response => response.json())
    .then(apartmentArray => this.setState({ apartments: apartmentArray}))
    .catch(errors => console.log("Apartment read errors:", errors))
  }

  createApartment = (newApartment) => {
    console.log(newApartment)
    fetch("/apartments", {
      body:JSON.stringify(newApartment),
      headers: {
        "Content-Type": "application/json"
      },
      method:"POST"
    })
    .then(response => response.json())
    .then(payload => this.readApartment())
    .catch(errors => console.log("Apartment create errors:", errors))
  }

  updateApartment = (editapartment, id) => {
    console.log("apartment:", editapartment)
    console.log("id:", id)
    fetch(`/apartments/${id}`, {
      body: JSON.stringify(editapartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json)
    .then(payload => this.readApartment())
    .catch(errors => console.log("Apartment update errors:", errors))
  }

  deleteApartment = (id) => {
    fetch(`/apartments/${id}`,{
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json)
    .then(payload => this.readApartment())
    .catch(errors => console.log("Apartment update errors:", errors))
  }

  render () {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Router>
        <Header
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
          />
        <Switch>
        <Route exact path ='/' component = {Home}/>

        <Route path ='/apartmentIndex' render={(props) => {
          return<ApartmentIndex apartments={this.state.apartments}/>}
        }/>

        <Route path ='/apartmentProfile/:id' render={(props ) => {
          let id = props.match.params.id
          let apartment = this.state.apartments.find(apartment =>apartment.id === +id)
          return < ApartmentProfile apartment={apartment}
         deleteApartment={this.deleteApartment}/>}}/>

        <Route path ='/newApartment' render={(props) => <NewApartment createApartment={this.createApartment}/>}/>

        <Route path ='/editApartment/:id' render={(props) =>{
          let id = props.match.params.id
          let apartment = this.state.apartments.find(apartment => apartment.id === +id)
          return<EditApartment updateApartment={this.updateApartment} apartment={apartment}/>}}/>

        <Route path ='/contact' component = {Contact}/>
        <Route path ='/userProfile' component = {UserProfile}/>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App
