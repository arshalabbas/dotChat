import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Dimensions } from "react-native";

import colors from "../configs/colors";

//components
import Button from "./components/Button";

const { width, height } = Dimensions.get("window");

export default function Feedback() {
  const [feedback, setFeedback] = useState("");

  const sendFeedback = () => {
    if (feedback.trim() === "") return;
    alert("need to code it!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>please inform us about your experiences when using this app.</Text>
      <TextInput
        placeholder="type your feedback..."
        multiline={true}
        numberOfLines={10}
        style={styles.textArea}
        onChangeText={setFeedback}
        value={feedback}
      />
      <Button title="send" onPress={sendFeedback} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  infoText: {
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
  },
  textArea: {
    backgroundColor: colors.background,
    width: width * 0.8,
    textAlignVertical: "top",
    marginVertical: 20,
    padding: 12,
    fontFamily: "Nunito-Regular",
    fontSize: 16,
    borderRadius: 10,
    elevation: 3,
    shadowColor: colors.darkShade,
  },
});
