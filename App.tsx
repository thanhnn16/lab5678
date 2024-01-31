import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import type { PropsWithChildren } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native";
import AppNavigation from "./src/navigation/AppNavigation.tsx";
import { UserProvider } from "./src/utils/UserProvider.tsx";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <UserProvider>
        <AppNavigation />
      </UserProvider>
    </NavigationContainer>
  );
}

export default App;
