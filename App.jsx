import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

//screen components
import Home from "./screens/Home";
import Settings from "./screens/Settings";
//settings sub components
import Feedback from "./screens/Feedback";
import ReportLogs from "./screens/ReportLogs";
import Notifications from "./screens/Notifications";
import Chat from "./screens/Chat";

//header components
import HomeHeader from "./screens/components/Headers/HomeHeader";
import ChatHeader from "./screens/components/Headers/ChatHeader";

export default function App() {
  let [fontLoaded] = useFonts({
    "Bebas-Neue": require("./assets/fonts/Bebas-Neue/Bebas-Neue.ttf"),
    "Nunito-Regular": require("./assets/fonts/Nunito/Nunito-Regular.ttf"),
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
          name="feedback"
          component={Feedback}
          options={{
            title: "Feedback",
          }}
        />
        <Stack.Screen
          name="report-logs"
          component={ReportLogs}
          options={{
            title: "Report Logs",
          }}
        />
        <Stack.Screen
          name="notifications"
          component={Notifications}
          options={{
            title: "Alerts and Notifications",
          }}
        />
        <Stack.Screen
          name="chat"
          component={Chat}
          options={{
            header: () => <ChatHeader />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
