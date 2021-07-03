import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../configs/colors";

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 30,
    elevation: 3,
    shadowColor: colors.shade,
  },
  buttonText: {
    fontFamily: "Nunito-Bold",
    letterSpacing: 0.6,
    fontSize: 18,
  },
});
