import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import { GetStarted } from "../../features/account/screen/getstarted.screen";
import LoginScreen from "../../features/account/screen/login.screen";
import SignUp from "../../features/account/screen/signup.screen";

const Stack = createStackNavigator();

export const AccountNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="main" component={GetStarted} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={SignUp} />
    </Stack.Navigator>
  );
};
