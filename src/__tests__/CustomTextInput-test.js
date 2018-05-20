import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import CustomTextInput from '../components/CustomTextInput'

it('Renders CustomTextInput correctly', () => {
  const renderer = new ShallowRenderer()
  renderer.render(
    <CustomTextInput />
  )
  const tree = renderer.getRenderOutput()
  expect(tree).toMatchSnapshot()
})
