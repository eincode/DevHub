import React, { Component } from 'react'
import {createStackNavigator} from 'react-navigation'

import Login from './src/screens/Login'
import Register from './src/screens/Register'

export default createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register }
  }
)
