import React, { useContext, useState } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthContext } from "../../../services/authentications/authentication.context";
import {
  AccountContainer,
  AccountCover,
  AuthBackground,
  AuthButton,
  Background,
} from "../component/background.component";
import { AuthInput } from "../component/input.component";
import { ActivityIndicator, Colors } from "react-native-paper";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { onRegister, error, isLoading } = useContext(AuthContext);
  return (
    <SafeArea>
      <AuthBackground>
        <AccountCover />
        <AccountContainer>
          <AuthInput
            label="Email"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            onChangeText={(e) => setEmail(e)}
            autoCapitalize="none"
          />
          <Spacer size="large" />
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            onChangeText={(e) => setPassword(e)}
            outlineColor="blue"
          />
          <Spacer size="large" />

          <AuthInput
            label="Confirmed Password"
            value={confirmPassword}
            textContentType="Password"
            secureTextEntry
            onChangeText={(e) => setConfirmPassword(e)}
            outlineColor="blue"
          />
          <Spacer size="large" />
          {isLoading ? (
            <ActivityIndicator animating={true} color={Colors.red800} />
          ) : (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              outlineColor="blue"
              onPress={() => onRegister(email, password, confirmPassword)}
            >
              Register
            </AuthButton>
          )}
          {error && <Text variants="error">{error}</Text>}
          {/* <Spacer size="large" /> */}
        </AccountContainer>
      </AuthBackground>
    </SafeArea>
  );
};

export default RegisterScreen;
