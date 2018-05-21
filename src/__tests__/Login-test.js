import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Login from '../screens/Login'

it('Renders Login Correctly', () => {
  const renderer = new ShallowRenderer()
  renderer.render(
    <Login />
  )
  const tree = renderer.getRenderOutput()
  expect(tree).toMatchSnapshot()
})
