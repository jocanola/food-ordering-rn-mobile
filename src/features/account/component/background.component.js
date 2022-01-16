import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const AuthBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(225, 225, 225, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(225, 225, 225, 0.7);
  padding:${({ theme }) => theme.space[4]}
  margin-top:${({ theme }) => theme.space[2]}
`;

export const Background = ({ children }) => (
  <AuthBackground>{children}</AuthBackground>
);

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})``;
