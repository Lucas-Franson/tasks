//import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Agenda from './screens/Agenda'
import Auth from './screens/Auth'

const MainRoutes = createSwitchNavigator({
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: Agenda
    }
})

const MainNavigator = 
    createAppContainer(MainRoutes, {
        initialRouteName: 'Auth'
    })

export default MainNavigator