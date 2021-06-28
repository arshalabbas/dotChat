const settingsData = [
  {
    title: "Feedback",
    action: ({ navigation }) => {
      navigation.navigate("feedback");
    },
  },
  {
    title: "Report Logs",
    action: ({ navigation }) => {
      navigation.navigate("report-logs");
    },
  },
];

export default settingsData;
