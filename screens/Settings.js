import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

import settingsData from "../configs/settingsConfig";

//components
import SettingsCard from "./components/SettingsCard";

export default function Settings() {
  return (
    <ScrollView contentContainerStyle={styles.body}>
      {settingsData.map((data, key) => (
        <SettingsCard key={key} title={data.title} action={data.action} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: "center",
  },
});
