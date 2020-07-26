import React from 'react';
import Login from '../screen/Login';
import Forgot from '../screen/Forgot';
import Register from  '../screen/Register';
import User from  '../screen/User';
import Delete from  '../controluser/Delete';
import Chat from '../chat/Chat';
import Initial from '../screen/Initial';
import SplashScreen from '../screen/SplashScreen';
import Dashboard from '../screen/Dashboard/Dashboard';
import BottomNavi from '../screen/Dashboard/BottomNavi';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { NavigationContainer } from '@react-navigation/native';



const RootStack = createStackNavigator(
    {
        Login,
        Forgot,
        Register,
        User,
        Delete
        ,Chat,
        Initial,
        SplashScreen,
        Dashboard,
        BottomNavi

      
    },
    {
      initialRouteName: 'SplashScreen',
      defaultNavigationOptions: {
        header: null,
        gesturesEnabled:false,
        headerLeft:null
    }
    }
  );

  const AppContainer = createAppContainer(RootStack);

  export default class Navi extends React.Component {
    render() {
      return <AppContainer />;
    }
  }