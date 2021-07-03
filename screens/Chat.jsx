import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../configs/colors";

//components
import TextArea from "./components/TextArea";

export default function Chat() {
  return (
    <View style={styles.container}>
      <Text>chat screen</Text>
      <TextArea />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between'
  },
});
