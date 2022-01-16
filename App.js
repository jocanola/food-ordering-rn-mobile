import "react-native-gesture-handler";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthContextProvider } from "./src/services/authentications/authentication.context";
import { initializeApp } from "firebase/app";

export default function App() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyAKVSObLn-pq5UU2bNuN-nVYk-BAq-Cac4",
    authDomain: "clone-6d4d2.firebaseapp.com",
    databaseURL: "https://clone-6d4d2.firebaseio.com",
    projectId: "clone-6d4d2",
    storageBucket: "clone-6d4d2.appspot.com",
    messagingSenderId: "350191896182",
    appId: "1:350191896182:web:6bc10294f12227fbb9c157",
    measurementId: "G-XBETG966YZ",
  };
  initializeApp(firebaseConfig);

  // Initialize Authentication
  // initializeApp(firebaseConfig);

  // useEffect(() => {
  //   CreateAnAcount();
  // }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
