import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../../configs/colors";

const { width } = Dimensions.get("window");

export default function SettingsCard({ title, action }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => action({ navigation })}
      activeOpacity={0.6}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    backgroundColor: colors.background,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 3,
    shadowColor: colors.secondar,
    padding: 16,
  },
  title: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 16,
  },
});
