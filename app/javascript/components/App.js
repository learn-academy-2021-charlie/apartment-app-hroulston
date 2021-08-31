import React, {Component} from "react"
import PropTypes from "prop-types"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentProfile from './pages/ApartmentProfile'
import Contact from './pages/Contact'
import UserProfile from './pages/UserProfile'

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
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
        <h1>Hello There</h1>
        <Switch>
        <Route exact path ='/' component = {Home}/>
        <Route path ='/apartmentIndex' component = {ApartmentIndex}/>
        <Route path ='/apartmentProfile' component = {ApartmentProfile}/>
        <Route path ='/contact' component = {Contact}/>
        <Route path ='/userProfile' component = {UserProfile}/>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App
