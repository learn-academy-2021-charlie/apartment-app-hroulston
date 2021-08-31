import React, {Component} from "react"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class Header extends Component {
  render () {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <>
        <header className="header">
          <NavItem>
            <NavLink href="/apartmentIndex">Apartments</NavLink>
          </NavItem>
            { logged_in &&
                <div>
                  <a href={ sign_out_route }>Sign Out</a>
                </div>
              }
              { !logged_in &&
                <div>
                  <a href={ sign_in_route }>Log In</a>
                </div>
              }
        </header>
      </>
    )
  }
}

export default Header
