import React, {Component} from "react"
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Redirect } from 'react-router-dom'

class EditApartment extends Component {
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
            pets: ""
          },
          success: false
        }
      }

      handleChange = (e) => {
        let { form } = this.state
        form[e.target.street] = e.target.value
        this.setState({ form: form })
    }

      handleSubmit = () => {
        this.props.updateApartment(this.state.form, this.props.apartment.id)
        this.setState({ success: true })
    }

  render () {
    return (
      <>
      <h1>Edit your Apartment</h1>
      <Form>
        <FormGroup>
          <Label for="street">Street</Label>
            <Input
              className='street'
              type="text"
              name="street"
              onChange={ this.handleChange }
              value={ this.state.form.street }/>
         </FormGroup>
         <FormGroup>
           <Label for="city">City</Label>
             <Input
               className='city'
               type="text"
               name="city"
               onChange={ this.handleChange }
               value={ this.state.form.city }/>
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
              <Input
                className='state'
                type="text"
                name="state"
                onChange={ this.handleChange }
                value={ this.state.form.state }/>
           </FormGroup>
           <FormGroup>
             <Label for="manager">Manager</Label>
               <Input
                 className='manager'
                 type="text"
                 name="manager"
                 onChange={ this.handleChange }
                 value={ this.state.form.manager }/>
            </FormGroup>
            <FormGroup>
              <Label for="email">Manager's Email</Label>
                <Input
                  className='email'
                  type="text"
                  name="email"
                  onChange={ this.handleChange }
                  value={ this.state.form.email }/>
             </FormGroup>
             <FormGroup>
               <Label for="price">Price</Label>
                 <Input
                   className='price'
                   type="text"
                   name="price"
                   onChange={ this.handleChange }
                   value={ this.state.form.price }/>
              </FormGroup>
              <FormGroup>
                <Label for="bedrooms">Bedrooms</Label>
                  <Input
                    className='bedrooms'
                    type="text"
                    name="bedrooms"
                    onChange={ this.handleChange }
                    value={ this.state.form.bedrooms }/>
               </FormGroup>
               <FormGroup>
                 <Label for="bathrooms">Bathrooms</Label>
                   <Input
                     className='bathrooms'
                     type="text"
                     name="bathrooms"
                     onChange={ this.handleChange }
                     value={ this.state.form.bathrooms }/>
                </FormGroup>
                <FormGroup>
                  <Label for="pets">Pets</Label>
                    <Input
                      className='pets'
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
        { this.state.success && <Redirect to={`/apartmentProfile/${this.props.apartment.id}`} />}
        </>
    )
  }
}

export default EditApartment
