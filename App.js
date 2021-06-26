import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

//screen components
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Notifications from "./screens/Notifications";
import Chat from "./screens/Chat";

//header components
import HomeHeader from "./screens/components/Headers/HomeHeader";

export default function App() {
  let [fontLoaded] = useFonts({
    "Bebas-Neue": require("./assets/fonts/Bebas-Neue/Bebas-Neue.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito/Nunito-SemiBold.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito/Nunito-Bold.ttf"),
  });
  return !fontLoaded ? (
    <AppLoading />
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ header: () => <HomeHeader /> }}
        />
        <Stack.Screen
          name="settings"
          component={Settings}
          options={{
            title: "Settings",
          }}
        />
        <Stack.Screen
          name="notifications"
          component={Notifications}
          options={{
            title: "Alerts and Notifications",
          }}
        />
        <Stack.Screen name="chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
