import Home from '../Home';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe("When home page renders", () =>{
  it("displays a message saying Welcome to Apartment Finder!", () =>{
    const home = shallow(<Home/>)
    const renderedMsg = home.find("h1")
    expect(renderedMsg.text()).toEqual("Welcome to Apartment Finder!")
  })
})
