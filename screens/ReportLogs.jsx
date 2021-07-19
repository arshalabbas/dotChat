import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../configs/colors";

//components
import Button from "./components/Button";

const { width } = Dimensions.get("window");
export default function ReportLogs() {
  return (
    <View style={styles.container}>
      <View style={styles.handshakeContainer}>
        <FontAwesome5 name="hands-helping" style={styles.handshake} />
      </View>
      <Text style={styles.bigText}>Help us!</Text>
      <Text style={styles.infoText}>
        {"We have logged some errors and bugs in your local storage that detected when used this app." +
          "\nIf we got those logs, we can make some improvements to our app." +
          '\nWe didn\'t collect any of your personal data. If you mind please send those logs to us by pressing the "Accept" button.'}
      </Text>
      <Button title="Accept" onPress={() => alert("need to code it!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  handshakeContainer: {
    width: width * 0.4,
    height: width * 0.4,
    backgroundColor: colors.primary,
    borderRadius: (width * 0.4) / 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  handshake: {
    fontSize: 80,
    color: colors.secondary,
  },
  bigText: {
    fontFamily: "Nunito-Bold",
    fontSize: width * 0.13,
    textAlign: "center",
    color: colors.primary,
  },
  infoText: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 16,
    textAlign: "center",
    margin: 20,
  },
});
