import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Register from '../screens/Register'
import { shallow } from 'enzyme'

it('Renders Register Correctly',  () => {
  const renderer = new ShallowRenderer()
  renderer.render(<Register />)
  const tree = renderer.getRenderOutput()
  expect(tree).toMatchSnapshot()
})

describe('Testing Register button to change state', () => {
  it('State changes as expected', () => {
    const wrapper = shallow(<Register />)
    expect(wrapper).toMatchSnapshot()
    wrapper.instance()._handleRegisterPress()
    expect(wrapper.state().isRegistering).toEqual(true)
  })
})

describe('Changing text input state', () => {
  it('State changes as expected', () => {
    const wrapper = shallow(<Register />)
    expect(wrapper).toMatchSnapshot()
    wrapper.instance()._handleTextInputChange('email', 'bob@mail.com')
    expect(wrapper.state().email).toEqual('bob@mail.com')
  })
})

describe('Changing isRegistering state', () => {
  it('State changes as expected', () => {
    const mockRef = {
      current: {
        focus: jest.fn()
      }
    }
    const wrapper = shallow(<Register />)
    expect(wrapper).toMatchSnapshot()
    wrapper.instance()._handleSubmitEditing('done')
    expect(wrapper.state().isRegistering).toEqual(true)
    wrapper.instance()._handleSubmitEditing(mockRef)
    expect(mockRef.current.focus).toBeCalled()
  })
})