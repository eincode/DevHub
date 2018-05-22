import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

import constants from '../config/constants'

export default class CustomTextInput extends Component {

  constructor(props) {
    super(props)
    this.textInputRef = React.createRef()
    this.focus = this.focus.bind(this)
  }

  focus() {
    this.textInputRef.current.focus()
  }

  render() {
    const { children, ...otherProps } = this.props
    return (
      <View style={styles.container}>
        {children}
        <TextInput
          ref={this.textInputRef}
          style={styles.textInput}
          underlineColorAndroid={'transparent'}
          {...otherProps}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: constants.DEVICE_WIDTH * 0.9,
    borderColor: constants.GREY,
    borderRadius: 5,
    borderWidth: 0.3,
    height: 40,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },

  textInput: {
    marginHorizontal: 10,
    flex: 2
  }
})
