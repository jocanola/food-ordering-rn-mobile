import React, { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { RestaurantList } from "../../restaurants/components/restaurentlist.style.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

const NoFavouriteContainer = styled(SafeArea)`
  justify-content: center;
  align-items: center;
`;
const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouriteContainer>
      <Text>No Favourites</Text>
    </NoFavouriteContainer>
  );
};

export default FavouritesScreen;
