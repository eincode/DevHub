/* @flow */

import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

import CustomButton from '../components/CustomButton'
import CustomTextInput from '../components/CustomTextInput'

import constants from '../config/constants'

export default class Login extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoggingIn: false
    }

    this._handleSubmitEditing = this._handleSubmitEditing.bind(this)
    this._handleLoginPress = this._handleLoginPress.bind(this)
  }

  _handleTextInputChange(stateChange) {
    this.setState(stateChange)
  }

  _handleSubmitEditing(nextRef) {
    if (typeof nextRef === 'string') {
      this._handleLoginPress()
      return
    }
    nextRef.focus()
  }

  _handleLoginPress() {
    this.setState({ isLoggingIn: !this.state.isLoggingIn })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to</Text>
        <Text style={styles.title}>DevHub</Text>
        <CustomTextInput
          ref={ref => (this.emailRef = ref)}
          placeholder={'Email'}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          returnKeyType={'next'}
          onChangeText={value => this._handleTextInputChange({ email: value })}
          onSubmitEditing={this._handleSubmitEditing.bind(this, this.passwordRef)}
        />
        <CustomTextInput
          ref={ref => (this.passwordRef = ref)}
          placeholder={'Password'}
          secureTextEntry={true}
          autoCapitalize={'none'}
          returnKeyType={'done'}
          onChangeText={value => this._handleTextInputChange({ password: value })}
          onSubmitEditing={this._handleSubmitEditing.bind(this, 'done')}
        />
        <CustomButton color={constants.PRIMARY_COLOR} onPress={() => this._handleLoginPress()}>
          {this.state.isLoggingIn ? (
            <ActivityIndicator color={'white'}/>
          ) : (
            <Text style={{ color: 'white' }}>Login</Text>
          )}
        </CustomButton>
        <Text style={styles.caption}>Register here</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10
  },

  caption: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center'
  }
})
