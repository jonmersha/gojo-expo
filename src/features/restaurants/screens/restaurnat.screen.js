import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../component/restaurnat-info.card.component.js";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer.js";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: black;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;
const RestaurantListContainer = styled.View`
  padding: ${(props) => props.theme.space[0]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})`
  margin-bottom: ${(props) => props.theme.space[5]};
`;

export const RestaurantScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </RestaurantListContainer>
  </SafeArea>
);
