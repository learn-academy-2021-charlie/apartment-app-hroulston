import ApartmentProfile from '../ApartmentProfile';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe("When apartment profile renders", () =>{
  it("displays an index heading showing the street", () =>{
    const profile = shallow(<ApartmentProfile/>)
    const header = profile.find("h1")
    expect(header.length.toEqual(1)
  })
})
