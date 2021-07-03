import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../../configs/colors";

const { width } = Dimensions.get("window");

export default function NotificationCard({
  category,
  title,
  description,
  redirect,
  image,
}) {
  const navigation = useNavigation();

  const redirectFromCard = () => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );

    if (!!pattern.test(redirect)) {
      Linking.openURL(redirect);
    } else {
      navigation.replace(redirect);
    }
  };

  return (
    <TouchableOpacity
      onPress={redirect ? redirectFromCard : null}
      activeOpacity={redirect ? 0.6 : 1}
    >
      <View style={styles.container}>
        <View style={styles.headingSection}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.category}>{category}</Text>
        </View>
        <View style={styles.descriptionSection}>
          <Text style={styles.description}>{description}</Text>
        </View>
        {image ? (
          <View style={styles.imageSection}>
            <Image
              style={styles.image}
              source={{
                uri: image,
              }}
            />
          </View>
        ) : null}
        {redirect ? (
          <View style={styles.linkInfo}>
            <Text style={styles.linkText}>click this card!</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    backgroundColor: colors.background,
    marginVertical: 12,
    borderRadius: 12,
    elevation: 3,
    shadowColor: colors.secondar,
  },
  headingSection: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  title: {
    fontFamily: "Nunito-Bold",
    color: colors.secondary,
    fontSize: 18,
    marginHorizontal: 10,
  },
  category: {
    fontFamily: "Nunito-Bold",
    color: colors.darkShade,
    fontSize: 14,
  },
  descriptionSection: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 2,
    borderColor: colors.shade,
  },
  description: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 15,
  },
  imageSection: {
    alignItems: "center",
    paddingBottom: 14,
  },
  image: {
    width: width * 0.8,
    height: width * 0.5,
    resizeMode: "contain",
  },
  linkInfo: {
    alignItems: "center",
    paddingVertical: 4,
    borderTopWidth: 0.3,
    borderColor: colors.shade,
  },
  linkText: {
    color: colors.shade,
    fontFamily: "Nunito-Bold",
  },
});
