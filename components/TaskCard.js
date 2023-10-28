import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TaskCard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  // const dispatch= useDispatch()
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
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                {data.task.name}
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500", color: "gray" }}>
                {data.task.description}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 8,
                  justifyContent: "space-between",
                  paddingHorizontal:5
                }}
              >
                <Text style={{ color: "gray", fontWeight: "500" }}>
                  {data.selectedTime}
                </Text>
                <Text style={{ color: "gray", fontWeight: "500" }}>
                  {data.convertedDate}
                </Text>
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
              <AntDesign name="closecircleo" size={26} color="black" />
            </View>
          </View>
        ))}
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({});
