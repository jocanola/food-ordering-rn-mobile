import React, { useContext } from "react";
import { AppNavigator } from "./app.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../../services/authentications/authentication.context";
import { AccountNavigation } from "./account.navigation";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigation />}
    </NavigationContainer>
  );
};
