import ApartmentIndex from '../ApartmentIndex';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe("When apartment index renders", () =>{
  it("displays an index heading reading Apartments", () =>{
    const index = shallow(<ApartmentIndex/>)
    const renderedMsg = index.find("h1")
    expect(renderedMsg.text()).toEqual("Apartments")
  })
})
