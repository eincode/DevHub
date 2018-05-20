/* @flow weak */

import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import constants from '../config/constants'

const CustomButton = ({ children, color, ...otherProps }) => (
  <TouchableOpacity
    style={[styles.container, { backgroundColor: color }]}
    {...otherProps}
  >
    {children}
  </TouchableOpacity>
)

export default CustomButton

const styles = StyleSheet.create({
  container: {
    width: constants.DEVICE_WIDTH * 0.9,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5
  }
})
