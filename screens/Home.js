import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../global/colors";

//components
import OnlineStatus from "./components/OnlineStatus";
import Wave from "./components/Wave";

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
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("chat")}
          >
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Find a dot</Text>
            </View>
          </TouchableOpacity>
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
  buttonContainer: {
    backgroundColor: colors.primary,
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    fontFamily: "Nunito-Bold",
    letterSpacing: 0.6,
    fontSize: 18,
  },
});
