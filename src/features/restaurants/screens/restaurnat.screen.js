import React,{useContext} from "react";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../component/restaurnat-info.card.component.js";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer.js";
import { SafeArea } from "../../../components/safe-area.components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context.js";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantScreen = () => {

  const {isLoading,error,restaurants}=useContext(RestaurantsContext);
  //console.log(restaurants[0].name)
  return (
  <View style={{backgroundColor:'white'}}>
    <SearchContainer>
      <Searchbar style={{ backgroundColor: "white" }} elevation={2} />
    </SearchContainer>
    <RestaurantList
      data={restaurants}
      renderItem={(item) => {
       console.log(item);
       
        return(
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard restaurant={item.item} />
        </Spacer>
      );
    }}
      keyExtractor={(item) => item.name}
    />
  </View>
);}
