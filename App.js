import React, { Component } from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";

import BottomTabNavigator from "./components/BottomTabNavigator";
import Loginscreen from "./screens/Login";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  render() {
    return <AppContainer />;
    const AppSwitchNavigator = createSwitchNavigator(
      {
        Login: {screen: Loginscreen,
        BottomTab: {screen: BottomTabNavigator}}
      },
      {
        intialRouteName: "Login"
      }
    )

    const AppContainer = createAppContainer(AppSwitchNavigator)
  }

  

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return <BottomTabNavigator />;
    }
    return null;
  }
}
