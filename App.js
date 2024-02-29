import { StyleSheet, Text, View } from "react-native";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurnat.screen";

import styled, { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
const StyledView = styled.View`
  background-color: red;
`;

const StyledText = styled.Text`
  color: #fff;
`;

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
    </>
  );
}
