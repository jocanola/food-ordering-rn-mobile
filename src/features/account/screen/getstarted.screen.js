import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthContext } from "../../../services/authentications/authentication.context";
import {
  AccountContainer,
  AccountCover,
  AuthBackground,
  AuthButton,
  Background,
} from "../component/background.component";
import LottieView from "lottie-react-native";
import { Text } from "../../../components/typography/text.component";

export const GetStarted = ({ navigation }) => {
  return (
    <SafeArea>
      <AuthBackground>
        <AccountCover />
        <LottieView
          key="animation"
          autoPlay
          loop
          style={{
            width: 350,
            height: 350,
            marginTop: 20,
            backgroundColor: "transparent",
          }}
          source={require("../../../../assets/animation.json")}
        />
        <AccountContainer>
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("login")}
          >
            {" "}
            login{" "}
          </AuthButton>

          <Spacer size="large" />
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("register")}
          >
            Register
          </AuthButton>
          <Spacer />
        </AccountContainer>
        <Spacer size="large" />

        <Text variant="title"> Order Food at Your Door Step</Text>
      </AuthBackground>
    </SafeArea>
  );
};
