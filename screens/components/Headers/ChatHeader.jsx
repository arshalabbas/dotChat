import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../configs/colors";

const { width } = Dimensions.get("window");

export default function ChatHeader() {
  const [botMessage, setBotMessage] = useState("...");
  const navigation = useNavigation();

  const testFunction = () => {
    const dummyMessage =
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem hic suscipit dolores odio quod numquam?";
    var i = 0;
    if (dummyMessage.length >= 25) {
      const split = dummyMessage.match(/.{1,25}/g);
      (function loop() {
        setBotMessage(split[i]);
        if (++i < split.length) setTimeout(loop, 2000);
      })();
    } else {
      setBotMessage(dummyMessage);
    }
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.statusBar}></View>
      <View style={styles.container}>
        <View style={styles.botMessagesContainer}>
          <Image
            style={styles.botImage}
            source={require("../../../assets/images/bot.png")}
          />
          <View style={styles.messageContainer}>
            <Text style={styles.botMessage}>{botMessage}</Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate("home")}
        >
          <FontAwesome name="close" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: width,
  },
  statusBar: {
    height: StatusBar.currentHeight,
    opacity: 0.7,
    backgroundColor: colors.primary,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    backgroundColor: colors.primary,
    paddingVertical: 12,
  },
  botMessagesContainer: {
    flexDirection: "row",
  },
  botImage: {
    width: 40,
    height: 40,
  },
  messageContainer: {
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 20,
    marginHorizontal: 5,
    maxWidth: width * 0.65,
  },
  botMessage: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 16,
  },
});
