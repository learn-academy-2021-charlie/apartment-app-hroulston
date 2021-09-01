import NewApartment from '../NewApartment';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe("When new apartment page renders", () =>{
  it("displays a heading reading Add a New Apartment", () =>{
    const index = shallow(<NewApartment/>)
    const renderedMsg = index.find("h1")
    expect(renderedMsg.text()).toEqual("Add a New Apartment")
  })
})
