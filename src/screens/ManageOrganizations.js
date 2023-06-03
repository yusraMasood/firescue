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

export default function ManageOrganizations(props) {
  const organizationArray = ["School", "University", "Office", "Industry"];
  const renderOrganization = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          props.navigation.navigate("TypeOfFire", { organization: item })
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
        Manage Organizations
      </Text>
      <FlatList
        key={"OrganizationArray"}
        keyExtractor={(item) => item}
        data={organizationArray}
        renderItem={renderOrganization}
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
    paddingBottom: 150,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 100,
    elevation: 3,
    width: 260,
    backgroundColor: "red",
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
    marginBottom: 150,
  },
});
