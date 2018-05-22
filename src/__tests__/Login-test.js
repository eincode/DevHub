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

describe('Changing email and password state', () => {
  it('State changes as expected', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper).toMatchSnapshot()
    wrapper.instance()._handleTextInputChange('email', 'bob@mail.com')
    wrapper.instance()._handleTextInputChange('password', 'password')
    expect(wrapper.state().email).toEqual('bob@mail.com')
    expect(wrapper.state().password).toEqual('password')
  })
})

describe('Changing isLoading state', () => {
  it('State changes as expected', () => {
    const mockRef = {
      current: {
        focus: jest.fn()
      }
    }
    const wrapper = shallow(<Login />)
    expect(wrapper).toMatchSnapshot()
    wrapper.instance()._handleSubmitEditing('done')
    expect(wrapper.state().isLoggingIn).toEqual(true)
    wrapper.instance()._handleSubmitEditing(mockRef)
    expect(mockRef.current.focus).toBeCalled()
  })
})
