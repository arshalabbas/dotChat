import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Pressable,
  ToastAndroid,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import colors from "../../../global/colors";

//Dimensions
const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

export default function HomeHeader() {
  const [newNotifications, setNewNotifications] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <Pressable
          onPress={() => navigation.navigate("notifications")}
          onLongPress={() =>
            ToastAndroid.show("Alerts and Notifications", ToastAndroid.SHORT)
          }
        >
          {({ pressed }) => (
            <>
              <Ionicons
                name="notifications"
                style={[
                  { opacity: pressed || newNotifications ? 1 : 0.8 },
                  styles.icons,
                ]}
              />
              {newNotifications ? (
                <Text style={styles.newAlert}>new!</Text>
              ) : null}
            </>
          )}
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("settings")}
          onLongPress={() => ToastAndroid.show("Settings", ToastAndroid.SHORT)}
        >
          {({ pressed }) => (
            <Ionicons
              name="settings-sharp"
              style={[{ opacity: pressed ? 1 : 0.8 }, styles.icons]}
            />
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: winHeight * 0.1,
    width: winWidth,
    backgroundColor: colors.primary,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  iconContainer: {
    flexDirection: "row",
  },
  icons: {
    fontSize: 30,
    color: colors.secondary,
    marginHorizontal: 7,
  },
  newAlert: {
    color: colors.warning,
    position: 'absolute',
    right: 38,
    top: 6,
  }
});
