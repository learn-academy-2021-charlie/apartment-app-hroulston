import NewApartment from '../NewApartment';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe("When edit apartment page renders", () =>{
  it("displays a heading reading Edit your Apartment", () =>{
    const edit = shallow(<EditApartment/>)
    const renderedMsg = edit.find("h1")
    expect(renderedMsg.text()).toEqual("Edit your Apartment")
  })
})
