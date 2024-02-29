import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
export const FlexLayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Searchbar />
      </View>
      <View style={styles.body}>
        <Text> Body Screens</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#ffdd00",
  },
  topBar: {
    padding: 5,
    marginTop: StatusBar.currentHeight,
    //backgroundColor: "#fff",
  },
  body: {
    flex: 1,
    // backgroundColor: "#fff",
  },
});
