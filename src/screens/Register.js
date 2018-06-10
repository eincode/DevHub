import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

import CustomButton from '../components/CustomButton'
import CustomTextInput from '../components/CustomTextInput'
import constants from '../config/constants';

export default class Register extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      isRegistering: false
    }

    this.emailRef = React.createRef()
    this.passwordRef = React.createRef()
    this.confirmPasswordRef = React.createRef()

    this._handleTextInputChange = this._handleTextInputChange.bind(this)
    this._handleSubmitEditing = this._handleSubmitEditing.bind(this)
    this._handleRegisterPress = this._handleRegisterPress.bind(this)
  }

  _handleTextInputChange(state, value) {
    this.setState({ [state]: value })
  }

  _handleSubmitEditing(nextRef) {
    if (typeof nextRef === 'string') {
      this._handleRegisterPress()
      return
    }
    nextRef.current.focus()
  }

  _handleRegisterPress() {
    this.setState({ isRegistering: !this.state.isRegistering })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> DevHub </Text>
        <CustomTextInput
          ref={this.emailRef}
          placeholder={'Email'}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          returnKeyType={'next'}
          onChangeText={this._handleTextInputChange.bind(this, 'email')}
          onSubmitEditing={this._handleSubmitEditing.bind(this, this.passwordRef)}
        />
        <CustomTextInput
          ref={this.passwordRef}
          placeholder={'Password'}
          autoCapitalize={'none'}
          returnKeyType={'next'}
          onChangeText={this._handleTextInputChange.bind(this, 'password')}
          onSubmitEditing={this._handleSubmitEditing.bind(this, this.confirmPasswordRef)}
        />
        <CustomTextInput
          ref={this.confirmPasswordRef}
          placeholder={'Confirm Password'}
          autoCapitalize={'none'}
          returnKeyType={'next'}
          onChangeText={this._handleTextInputChange.bind(this, 'confirmPassword')}
          onSubmitEditing={this._handleSubmitEditing.bind(this, 'done')}
        />
        <CustomButton color={constants.PRIMARY_COLOR} onPress={this._handleRegisterPress}>
          {this.state.isRegistering ? (
            <ActivityIndicator color={'white'}/>
          ) : (
            <Text style={{ color: 'white' }}>Register</Text>
          )}
        </CustomButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white'
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10
  }
})
