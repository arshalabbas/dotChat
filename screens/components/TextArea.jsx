import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../configs/colors";

const { width, height } = Dimensions.get("window");
export default function TextArea() {
  const [textAreaHeight, setTextAreaHeight] = useState();
  const [message, setMessage] = useState("");

  const changeTextAreaHeaight = (event) => {
    let contentHeight = event.nativeEvent.contentSize.height;
    if (contentHeight >= height * 0.25) return;
    setTextAreaHeight(contentHeight);
  };

  const sendMessage = () => {
    if (message.trim() === "") return;
    if (message.length > 100)
      return alert(
        "dummy error: hey dumb don't send this big message...\nneed to code this too"
      );
    alert("need to code it");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[{ height: textAreaHeight }, styles.textArea]}
        multiline={true}
        placeholder="type your message..."
        value={message}
        onChangeText={setMessage}
        onContentSizeChange={changeTextAreaHeaight}
      />
      <TouchableOpacity onPress={sendMessage} activeOpacity={0.6}>
        <View style={styles.sendButton}>
          <Ionicons name="send" style={styles.buttonIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  textArea: {
    backgroundColor: colors.background,
    width: width * 0.75,
    borderRadius: 28,
    paddingHorizontal: 12,
    paddingVertical: 13,
    elevation: 3,
    fontFamily: "Nunito-Regular",
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  buttonIcon: {
    fontSize: 18,
    color: colors.secondary,
  },
});
