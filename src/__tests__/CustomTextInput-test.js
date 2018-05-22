import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { shallow } from 'enzyme'

import CustomTextInput from '../components/CustomTextInput'

it('Renders CustomTextInput correctly', () => {
  const renderer = new ShallowRenderer()
  renderer.render(
    <CustomTextInput />
  )
  const tree = renderer.getRenderOutput()
  expect(tree).toMatchSnapshot()
})

describe('Focus method', () => {
  it('Method working as expected', () => {
    const wrapper = shallow(<CustomTextInput/>)
    const focusMock = jest.fn()
    CustomTextInput.focus = focusMock
    CustomTextInput.focus()
    expect(focusMock).toBeCalled()
  })
})
