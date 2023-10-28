import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/TaskReduser.js";
import TaskCard from "../components/TaskCard.js";

const TaskScreen = () => {
  const [task, setTask] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [selectedTime, setSelectedTime] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const convertedStartdate = new Date(
    route.params.selectedDates.startDate.replace(/\//g, "-")
  );

  const Enddate = new Date(
    route.params.selectedDates.endDate.replace(/\//g, "-")
  );

  const convertedEnddate = Enddate.setDate(Enddate.getDate() + 1);

  const handleInputChange = (key, value) => {
    setTask({ ...task, [key]: value });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Add Task",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#427D71",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);
  console.log({ task, selectedDate, selectedTime });

  console.log(tasks.length);

  const times = [
    {
      id: "0",
      time: "9:00 - 10:00 AM",
    },
    {
      id: "1",
      time: "10:00 - 11:00 AM",
    },
    {
      id: "2",
      time: "11:00 - 12:00 AM",
    },
    {
      id: "2",
      time: "12:00 - 1:00 PM",
    },
    {
      id: "4",
      time: "1:00 - 2:00 PM",
    },
    {
      id: "5",
      time: "2:00 - 3:00 PM",
    },
  ];

  const handleAddTask = () => {
    if (!task.name || !task.description || !selectedDate || selectedTime) {
      Alert.alert("Invalid Details", "Please enter all the details", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }

    if (task.name && task.description && selectedDate && selectedTime) {
      const convertedDate = selectedDate.toLocaleDateString("en-GB");

      console.log(convertedDate);

      dispatch(addTask({ task, selectedTime, convertedDate }));

      console.log("Done");
    }
  };

  return (
    <View>
      <ScrollView>
        <View
          style={{
            margin: 20,
            borderColor: "#427D71",
            borderWidth: 3,
            borderRadius: 6,
          }}
        >
          {/* Trip name */}
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              borderColor: "black",
              paddingHorizontal: 10,
              borderBottomWidth: 1,
              paddingVertical: 15,
            }}
          >
            <FontAwesome name="pencil-square-o" size={24} color="black" />
            <TextInput
              placeholder="Task Name"
              value={task.name}
              onChangeText={(text) => handleInputChange("name", text)}
            />
          </Pressable>
          {/* Destination */}
          <Pressable
            // onPress={() => navigation.navigate("Search")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "black",
              borderBottomWidth: 1,

              paddingVertical: 15,
            }}
          >
            <Feather name="search" size={24} color="black" />
            <TextInput
              placeholder="Description"
              value={task.description}
              onChangeText={(text) => handleInputChange("description", text)}
            />
          </Pressable>

          {/* Selected Dates */}

          {/* Search Button */}
        </View>
        <View
          style={{
            margin: 20,
          }}
        >
          <Text
            style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}
          >
            Pick Up Date
          </Text>

          <HorizontalDatepicker
            mode="gregorian"
            startDate={convertedStartdate}
            endDate={convertedEnddate}
            initialSelectedDate={convertedStartdate}
            onSelectedDateChange={(date) => setSelectedDate(date)}
            selectedItemWidth={170}
            unselectedItemWidth={38}
            itemHeight={38}
            itemRadius={10}
            selectedItemTextStyle={styles.selectedItemTextStyle}
            unselectedItemTextStyle={styles.selectedItemTextStyle}
            selectedItemBackgroundColor="#222831"
            unselectedItemBackgroundColor="#ececec"
            flatListContainerStyle={styles.flatListContainerStyle}
          />

          <View>
            <Text
              style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}
            >
              Select Time
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {times.map((item, index) => (
                <Pressable
                  key={index}
                  onPress={() => setSelectedTime(item.time)}
                  style={
                    selectedTime.includes(item.time)
                      ? {
                          margin: 10,
                          borderRadius: 7,
                          padding: 15,
                          backgroundColor: "black",
                          borderWidth: 0.7,
                        }
                      : {
                          margin: 10,
                          borderRadius: 7,
                          padding: 15,
                          borderColor: "gray",
                          borderWidth: 0.7,
                        }
                  }
                >
                  <Text
                    style={
                      selectedTime.includes(item.time)
                        ? { color: "white", fontWeight: "bold" }
                        : {}
                    }
                  >
                    {item.time}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>

          <Pressable
            onPress={() => {
              handleAddTask();
            }}
            style={{
              marginTop: 20,
              backgroundColor: "#427D71",
              borderColor: "black",
              paddingHorizontal: 10,

              paddingVertical: 15,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: 500,
                color: "white",
              }}
            >
              Add Task
            </Text>
          </Pressable>
        </View>
        <TaskCard />
      </ScrollView>
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({});
