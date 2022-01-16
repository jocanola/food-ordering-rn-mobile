import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../../features/setting/screens/setting.screen";
import FavouritesScreen from "../../features/setting/screens/favourites.screen";

const Stack = createStackNavigator();
const SettingsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="settings"
        component={SettingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="favourite" component={FavouritesScreen} />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
