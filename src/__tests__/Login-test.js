import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Login from '../screens/Login'
import { shallow } from 'enzyme'

it('Renders Login Correctly', () => {
  const renderer = new ShallowRenderer()
  renderer.render(<Login />)
  const tree = renderer.getRenderOutput()
  expect(tree).toMatchSnapshot()
})

describe('Testing Login button to change state', () => {
  it('State changes as expected', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper).toMatchSnapshot()
    wrapper.instance()._handleLoginPress()
    expect(wrapper.state().isLoggingIn).toEqual(true)
  })
})
