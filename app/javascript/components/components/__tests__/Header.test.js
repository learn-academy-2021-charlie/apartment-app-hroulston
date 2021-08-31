import Header from '../Header';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe("When header loads", () =>{
  it("displays a navlink", () =>{
    const header = shallow(<Header/>)
    const nav = header.find('NavLink')
    expect(nav.length).toEqual(1)
  })
})
