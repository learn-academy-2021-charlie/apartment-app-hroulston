import React, {Component} from "react"
import PropTypes from "prop-types"

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
      <>
      <h1>Hello There</h1>
      // Here for now, will need to move to Header probably
      { logged_in &&
          <div>
            <a href={sign_out_route }>Sign Out</a>
          </div>
        }
        { !logged_in &&
          <div>
            <a href={ sign_in_route }>Sign In</a>
          </div>
        }
      </>
    );
  }
}

export default App
