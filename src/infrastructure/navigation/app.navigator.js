import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { SafeArea } from "../../components/utility/safe-area.component";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import SettingScreen from "../../features/setting/screens/setting.screen";
import SettingsNavigator from "./settings.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurant: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};



const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          screenOptions={createScreenOptions}
         
        >
          <Tab.Screen
            name="Restaurant"
            component={RestaurantsNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
