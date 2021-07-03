import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import colors from "../configs/colors";

const { width } = Dimensions.get("window");

//components
import OnlineStatus from "./components/OnlineStatus";
import Wave from "./components/Wave";
import Button from "./components/Button";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <OnlineStatus />
      </View>
      <View style={styles.waveContainer}>
        <Wave />
      </View>
      <View style={styles.joinSection}>
        <View style={styles.section}>
          <Text style={styles.heading}>Chat with strangers.</Text>
        </View>
        <View style={styles.section}>
          <Button
            title="find a dot"
            onPress={() => navigation.navigate("chat")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  waveContainer: {
    height: 80,
    width: width,
  },
  section: {
    marginVertical: 33,
  },
  joinSection: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  heading: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 28,
  },
});
