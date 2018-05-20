import React from 'react'
import { Text } from 'react-native'
import ShallowRenderer from 'react-test-renderer/shallow'

import constants from '../config/constants'

import CustomButton from '../components/CustomButton'

it('Renders button correctly', () => {
  const renderer = new ShallowRenderer()
  renderer.render(
    <CustomButton color={constants.PRIMARY_COLOR}>
      <Text>Button</Text>
    </CustomButton>
  )
  const tree = renderer.getRenderOutput()
  expect(tree).toMatchSnapshot()
})
