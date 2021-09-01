import Footer from '../Footer';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe("When footer loads", () =>{
  it("displays 4 navlinks", () =>{
    const footer = shallow(<Footer/>)
    const nav = footer.find('NavLink')
    expect(nav.length).toEqual(4)
  })
})
