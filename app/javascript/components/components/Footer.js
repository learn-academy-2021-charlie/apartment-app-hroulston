import React, {Component} from "react"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo_1 from '../assets/github.png'
import logo_2 from '../assets/linked.png'
import logo from '../assets/logo.png'

class Footer extends Component {
  render () {
    return (
      <>
        <div className="footer">
          <NavItem>
            <NavLink href="/contact">Contact Us</NavLink>
          </NavItem>
          <NavLink href="https://github.com/hroulston" target="blank">
            <img src={logo_1} alt="github logo" className="logo"/>
          </NavLink>
          <NavLink href="https://www.linkedin.com/in/heather-roulston-4b88504b/" target="blank">
            <img src={logo_2} alt="linked in logo" className="logo"/>
          </NavLink>
          <NavLink href="/">
            <img src={logo} alt="apartment app logo" className="logo"/>
          </NavLink>
        </div>
      </>
    )
  }
}

export default Footer
