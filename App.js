import React, { Component } from 'react'
import {createStackNavigator} from 'react-navigation'

import Login from './src/screens/Login'

export default createStackNavigator(
  {
    Login: { screen: Login }
  }
)
