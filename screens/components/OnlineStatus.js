import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../configs/colors";

export default function OnlineStatus() {
  const [onlineCount, setOnlineCount] = useState(62);
  const [pairedCount, setPairedCount] = useState(31);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{onlineCount}</Text>
      <Text style={styles.text}>dots creating</Text>
      <Text style={styles.count}>{pairedCount}</Text>
      <Text style={styles.text}>lines now.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 25,
  },
  count: {
    fontFamily: "Bebas-Neue",
    fontSize: 38,
    color: colors.secondary,
  },
  text: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 18,
    color: colors.secondary,
  },
});
