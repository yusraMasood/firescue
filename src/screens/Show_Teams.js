import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { db } from "../../Config";
import { vh, vw } from "../Utils/dimensions";

export default function Show_Teams(props) {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const getTeams = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "teams"));
    const tempArray = [];
    querySnapshot.forEach((doc) => {
      //   console.log("dhoidh", doc.data.toString);

      tempArray.push({
        id: doc?.id,
        desc: doc.data(),
      });
    });
    setTeams(tempArray);
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      getTeams();
    });
    return unsubscribe;
  }, []);
  const onPressDelete = async (id) => {
    await deleteDoc(doc(db, "teams", id));
    getTeams();
  };
  const renderTeams = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("Update_Teams", {
              item,
            })
          }
          style={styles.cardContainer}
        >
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Name: </Text>
            <Text style={styles.valueText}>{item?.desc?.name}</Text>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Location: </Text>
            <Text style={styles.valueText}>
              {item?.desc?.location?.address}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressDelete(item?.id)}
          style={styles.deleteContainer}
        >
          <Image
            source={require("../../assets/delete.png")}
            style={styles.deleteicon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text title="Pannel" style={styles.textStyle}>
        All TEAMS
      </Text>
      <StatusBar style="auto" />
      {loading && <ActivityIndicator size={20} color={"red"} />}

      <FlatList
        data={teams}
        key={"teamArray"}
        keyExtractor={(item, index) => index}
        renderItem={renderTeams}
      />
    </View>
  );
}
const InputLength = 260;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    // width: vw * 10,
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 1,
    width: InputLength,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    paddingHorizontal: 100,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 100,
  },
  TextInput: {
    height: 50,
    flex: 1,
    paddingright: 0,
    marginleft: 0,
    padding: 10,
    marginLeft: -90,
    textAlign: "left",
    flexDirection: "row",
    display: "flex",
  },
  imageStyle: {
    width: 200,
    height: 200,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  textStyle: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
    position: "relative",
    paddingTop: 0,
  },
  AddBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "red",
    marginBottom: 50,
    padding: 20,
    marginTop: 20,
  },
  register_button: {
    height: 20,
    marginBottom: 20,
  },
  RegisterText: {
    color: "white",
  },
  nameContainer: {
    flexDirection: "row",
    // alignItems: "center",
  },
  cardContainer: {
    width: vw * 90,
    marginBottom: vh * 2,
    borderWidth: 2,
    padding: vw * 2.5,
  },
  valueText: {
    width: vw * 60,
  },
  deleteicon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: "contain",
  },
  deleteContainer: {
    position: "absolute",
    right: vw * 3,
    top: vh * 4,
  },
});
