import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthContext } from "../../../services/authentications/authentication.context";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const ListContainer = styled(List.Item)`
  padding: ${({ theme }) => theme.space[2]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;
const SettingScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthContext);
  return (
    <SafeArea>
      <List.Section>
        <AvatarContainer>
          <Avatar.Icon
            icon="human"
            size={180}
            backgroundColor={colors.brand.primary}
          />
          <Spacer size="large">
            <Text variant="label">{user?.email}</Text>
          </Spacer>
        </AvatarContainer>

        <ListContainer
          title="Favourite"
          description="View your favourites"
          style={{ padding: 16 }}
          left={() => <List.Icon icon="heart" color="black" />}
          onPress={() => navigation.navigate("favourite")}
        />
        <ListContainer
          title="Log Out"
          style={{ padding: 16 }}
          left={(props) => <List.Icon {...props} icon="door" color="black" />}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SafeArea>
  );
};

export default SettingScreen;
