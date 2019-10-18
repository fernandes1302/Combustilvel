import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import RegisterFullStation from "../view/RegisterFuelStationScreen";

const DrawerNavigator = createDrawerNavigator({
  RegisterFullStation: RegisterFullStation
});

const stackNavigation = createStackNavigator({
  drawer: {
    screen: DrawerNavigator,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(stackNavigation);
