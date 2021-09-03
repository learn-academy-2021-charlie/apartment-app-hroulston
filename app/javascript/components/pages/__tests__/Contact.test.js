import Contact from '../Contact';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe("When contact page renders", () =>{
  it("displays two forms", () =>{
    const contact = shallow(<Contact/>)
    const form = contact.find("FormGroup")
    expect(form.length.toEqual(2))
  })
})
// FormGroup might not work. Will probably have to research to see if another version of test needs to be run.
