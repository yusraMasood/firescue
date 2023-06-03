import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function TypeOfFire(props) {
  const fireArray = [
    "Ordinary Fire",
    "Liquids and Gases Fires",
    "Electrical Fires",
    "Metallic Fires",
    "Grease or cooking Fires",
  ];
  const renderFireType = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          props.navigation.navigate("Location_User", {
            type: item,
            organization: props?.route?.params?.organization,
          })
        }
      >
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/firescue_logo.png")}
      />
      <Text title="Pannel" style={styles.textStyle}>
        Type of Fire
      </Text>
      <FlatList
        key={"OrganizationArray"}
        keyExtractor={(item) => item}
        data={fireArray}
        renderItem={renderFireType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "red",
    width: 260,
    marginBottom: 20,
    padding: 30,
    marginTop: 0,
  },
  text: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  textStyle: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 0,
    marginBottom: 5,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
    position: "relative",
    paddingTop: 0,
  },
  imageStyle: {
    width: 200,
    height: 200,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  view: {
    marginBottom: 70,
  },
});
