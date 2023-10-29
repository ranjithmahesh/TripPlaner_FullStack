import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/SavedReduser";

const TaskCard = ({ tripId }) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => {
    const trip = state.booking.booking.find((item) => item.id === tripId);
    return trip ? trip.tasks : [];
  });
  console.log(tasks);
  const deletTaskHandler = (tripId, Id) => {
    dispatch(deleteTask({ tripId, Id }));
    console.log("done");
    console.log(tripId, Id);
  };

  return (
    <View>
      {tasks
        .slice(0)
        .reverse()
        .map((data, i) => (
          <View
            key={i}
            style={{
              marginHorizontal: 20,
              backgroundColor: "white",
              paddingHorizontal: 10,
              marginVertical: 5,
              borderRadius: 6,
              flexDirection: "row",
            }}
          >
            <View style={{ paddingVertical: 10, flex: 2 }}>
              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
              >
                <Text
                  style={{ color: "gray", fontWeight: "500", fontSize: 18 }}
                >
                  Name:
                </Text>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                  {data.name}
                </Text>
              </View>
              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
              >
                <Text
                  style={{ color: "gray", fontWeight: "500", fontSize: 18 }}
                >
                  Description:
                </Text>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                  {data.description}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 8,
                  justifyContent: "space-between",
                  width: 290,
                }}
              >
                <View style={{ flexDirection: "row", gap: 5 }}>
                  <Text style={{ color: "gray", fontWeight: "500" }}>
                    Date:
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>{data.date}</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 5 }}>
                  <Text style={{ color: "gray", fontWeight: "500" }}>
                    Time:
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>{data.time}</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                paddingVertical: 10,
                padding: 10,
                justifyContent: "space-between",
              }}
            >
              <AntDesign name="checkcircleo" size={26} color="black" />
              <AntDesign
                name="closecircleo"
                size={26}
                color="black"
                onPress={() => deletTaskHandler(data.tripId, data.id)}
              />
            </View>
          </View>
        ))}
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({});
