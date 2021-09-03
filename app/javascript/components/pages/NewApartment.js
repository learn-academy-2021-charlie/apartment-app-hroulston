import React, {Component} from "react"
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Redirect } from 'react-router-dom'

class NewApartment extends Component {
  constructor(props){
        super(props)
        this.state = {
          form:{
            street: "",
            city: "",
            state: "",
            manager: "",
            email: "",
            price: "",
            bedrooms: 0,
            bathrooms: 0,
            pets: "",
            user_id: this.props.current_user.id
          },
          success: false
        }
      }

        handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }

    handleSubmit = () => {
        this.props.createApartment(this.state.form)
        this.setState({ success: true })
    }

  render () {
    return (
      <>
      <h1>Add a New Apartment</h1>
      <Form className="form">
        <FormGroup>
          <Label for="street">Street</Label>
            <Input
              className='newapt'
              type="text"
              name="street"
              onChange={ this.handleChange }
              value={ this.state.form.street }/>
         </FormGroup>
         <FormGroup>
           <Label for="city">City</Label>
             <Input
               className='newapt'
               type="text"
               name="city"
               onChange={ this.handleChange }
               value={ this.state.form.city }/>
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
              <Input
                className='newapt'
                type="text"
                name="state"
                onChange={ this.handleChange }
                value={ this.state.form.state }/>
           </FormGroup>
           <FormGroup>
             <Label for="manager">Manager</Label>
               <Input
                 className='newapt'
                 type="text"
                 name="manager"
                 onChange={ this.handleChange }
                 value={ this.state.form.manager }/>
            </FormGroup>
            <FormGroup>
              <Label for="email">Manager's Email</Label>
                <Input
                  className='newapt'
                  type="text"
                  name="email"
                  onChange={ this.handleChange }
                  value={ this.state.form.email }/>
             </FormGroup>
             <FormGroup>
               <Label for="price">Price</Label>
                 <Input
                   className='newapt'
                   type="text"
                   name="price"
                   onChange={ this.handleChange }
                   value={ this.state.form.price }/>
              </FormGroup>
              <FormGroup>
                <Label for="bedrooms">Bedrooms</Label>
                  <Input
                    className='newapt'
                    type="text"
                    name="bedrooms"
                    onChange={ this.handleChange }
                    value={ this.state.form.bedrooms }/>
               </FormGroup>
               <FormGroup>
                 <Label for="bathrooms">Bathrooms</Label>
                   <Input
                     className='newapt'
                     type="text"
                     name="bathrooms"
                     onChange={ this.handleChange }
                     value={ this.state.form.bathrooms }/>
                </FormGroup>
                <FormGroup>
                  <Label for="pets">Pets</Label>
                    <Input
                      className='newapt'
                      type="text"
                      name="pets"
                      onChange={ this.handleChange }
                      value={ this.state.form.pets }/>
                 </FormGroup>
                 <div className="button">
                  <Button
                    name="submit"
                    onClick={this.handleSubmit}>
                    Add New Apartment
                  </Button>
                </div>
        </Form>
        { this.state.success && <Redirect to="/apartmentIndex" />}
      </>
    )
  }
}

export default NewApartment
