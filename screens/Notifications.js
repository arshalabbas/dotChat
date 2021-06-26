import React, { useState } from "react";
import { RefreshControl, StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../global/colors";

const { width } = Dimensions.get("window");

//components
import NotificationCard from "./components/NotificationCard";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      category: "Update!",
      title: "added chat feature",
      description:
        "hello, there we just started new app to chat with strangers... please support us... thanks by Arshal Abbas nub developer",
      redirect: "https://www.youtube.com/",
      image:
        "https://i.ibb.co/5BjNgvF/MV5-BNGZj-MGM1-MTgt-ZTAw-My00-Nm-Ew-LTg5-NTMt-OGJl-Yj-I3-Y2-Uz-Mz-Vl-Xk-Ey-Xk-Fqc-Gde-QXVy-Mj-Yw-MDk.jpg",
    },
    {
      category: "New!",
      title: "added settings screen",
      description:
        "theres settings to customize your app, you can change theme now...\n click this card to goto settings or you can simply click the gear icon from the homescreen.. :)",
      redirect: "settings"
    },
    
  ]);

  return !notifications.length ? (
    <View style={styles.emptyContainer}>
      <Ionicons
        name="notifications-off-outline"
        style={styles.noNotificationsIcon}
      />
      <Text style={styles.nothingText}>Nothing here now</Text>
    </View>
  ) : (
    <ScrollView contentContainerStyle={styles.cardContainer}>
        {notifications.map((data, key) => (
          <NotificationCard
            key={key}
            category={data.category}
            title={data.title}
            description={data.description}
            redirect={data.redirect}
            image={data.image}
          />
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  noNotificationsIcon: {
    fontSize: width * 0.6,
    color: colors.shade,
  },
  nothingText: {
    fontFamily: "Nunito-Bold",
    fontSize: width * 0.07,
    color: colors.shade,
  },
  cardContainer: {
    alignItems: "center",
  },
});
