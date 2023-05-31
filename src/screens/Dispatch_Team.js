import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

// const teams = [{ team: "Team A" }, { team: "Team B" }, { team: "Team C" }];
import MapWindow from "./new_page";
import { db } from "../../Config";
import { vh } from "../Utils/dimensions";

const Dispatch_Team = (props) => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");
  const [selectedTeam, setSelectedTeam] = React.useState("Select Team");
  const [isClicked, setIsClicked] = React.useState(false);
  const [data, setData] = useState(teams);
  const onSearch = (txt) => {
    let tempData = data.filter((item) => {
      return item.team.toLowerCase().indexOf(txt.toLowerCase()) > -1;
    });
    setData(tempData);
  };
  const getTeams = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "users"));
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
  console.log("teams", teams);
  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      getTeams();
    });
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container_whole}>
      <Text title="dispatch_team" style={styles.Dispatch_Team}>
        Dispatch Team
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Text title="Select Teams" style={styles.left_element}>
            Select Teams:{" "}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.dropdownselector}
          onPress={() => {
            setIsClicked(!isClicked);
          }}
        >
          <Text style={styles.dropdowntext}>{selectedTeam}</Text>
          {isClicked ? (
            <Image
              style={styles.icon_down}
              source={require("../../assets/dropdown_icon.png")}
            />
          ) : (
            <Image
              style={styles.icon_up}
              source={require("../../assets/dropup_icon.png")}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, padding: 18 }}></View>
        {isClicked ? (
          <View style={styles.dropdownArea}>
            <TextInput
              placeholder="Search"
              style={styles.searchInput}
              onChangeText={(txt) => {
                onSearch(txt);
              }}
            />
            <FlatList
              data={teams}
              renderItem={({ item, index }) => {
                console.log("items", item);
                return (
                  <TouchableOpacity
                    style={styles.teamlist}
                    onPress={() => {
                      setSelectedTeam(item.team);
                      setIsClicked(false);
                    }}
                  >
                    <Text>{item?.desc?.name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Text title="location" style={styles.left_element}>
            Location:
          </Text>
        </View>
        <View style={{ flex: 1, padding: 18 }}>
          <View style={styles.container}>
            <MapWindow style={styles.map} />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, padding: 18 }}></View>
      </View>
      <View>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.Button_Text}>DISPATCH</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dispatch_Team;

const styles = StyleSheet.create({
  Dispatch_Team: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 70,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 5,
    position: "relative",
    paddingTop: 10,
    fontSize: 25,
  },
  left_element: {
    justifyContent: "flex-start",
    fontSize: 16,
    padding: 15,
    fontWeight: "bold",
  },
  imageStyle: {
    width: 150,
    height: 150,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 18,
  },
  Button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "red",
    marginBottom: 50,
    padding: 20,
    marginTop: 28,
  },
  Button_Text: {
    color: "white",
  },
  container_whole: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    paddingRight: 18,
  },
  view: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    paddingleft: 30,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  picker: {
    width: 200,
    height: 44,
  },
  dropdownselector: {
    width: 200,
    height: 44,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingleft: 15,
    paddingRight: 15,
    paddingTop: 10,
    borderColor: "#8e8e8e",
    alignSelf: "center",
  },
  icon_down: {
    width: 24,
    height: 24,
  },
  dropdowntext: {
    paddingLeft: 10,
  },
  icon_up: {
    width: 15,
    height: 15,
  },
  dropdownArea: {
    width: "60%",
    height: vh * 20,
    borderRadius: 10,
    marginTop: 5,
    marginleft: 50,
    backgroundColor: "#fff",
    elevation: 5,
    alignSelf: "center",
  },
  searchInput: {
    width: "60%",
    height: 30,
    borderRadius: 10,
    borderwidth: 0.5,
    borderColor: "#8e8e8e",
    paddingLeft: 10,
  },
  teamlist: {
    width: "80%",
    height: 30,
    borderBottomWidth: 0.2,
    borderBottomColor: "#8e8e8e",
    alignSelf: "center",
    justifyContent: "center",
  },
  container: {
    width: 200,
    height: 200,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: "auto",
    marginRight: "auto",
    right: 30,
  },
  map: {
    flex: 1,
  },
});
