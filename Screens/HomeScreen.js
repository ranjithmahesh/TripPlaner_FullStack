import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";

import { FontAwesome, Feather } from "@expo/vector-icons";
import { v4 as uuidv4 } from "uuid";
import {
  Alert,
  Button,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import DatePicker from "react-native-date-ranges";

const HomeScreen = () => {
  const [selectedDates, setSelectedDates] = useState();
  const [destination, setDestination] = useState("");

  const navigation = useNavigation();
  const route = useRoute();
  const [name, setName] = useState("");
  const id = uuidv4();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Trip Planner",
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

  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };

  const searchPlaces = () => {
    if (!destination || !selectedDates || !name) {
      Alert.alert("Invalid Details", "Please enter all the details", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }

    if (destination && selectedDates && name) {
      navigation.navigate("Confirmation", {
        place: destination,
        selectedDates: selectedDates,
        name: name,
        id: id,
      });
    }

    setDestination(""), setName(""), setSelectedDates();
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
              placeholder="Enter Trip Name"
              value={name}
              onChangeText={(e) => {
                setName(e);
              }}
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
              value={destination}
              placeholder={"Enter Your Destination"}
              onChangeText={(e) => {
                setDestination(e);
              }}
            />
          </Pressable>

          {/* Selected Dates */}
          <Pressable
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
            <Feather name="calendar" size={24} color="black" />
            <DatePicker
              style={{
                width: 350,
                height: 30,
                borderRadius: 0,
                borderWidth: 0,
                borderColor: "transparent",
              }}
              customStyles={{
                placeholderText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                },
                headerStyle: {
                  backgroundColor: "#427D71",
                },
                contentText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                },
              }}
              selectedBgColor="#427D71"
              customButton={(onConfirm) => customButton(onConfirm)}
              onConfirm={(startDate, endDate) =>
                setSelectedDates(startDate, endDate)
              }
              allowFontScaling={false}
              placeholder={"Select Your Dates"}
              mode={"range"}
            />
          </Pressable>

          {/* Search Button */}
          <Pressable
            onPress={() => searchPlaces()}
            style={{
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
              Confirm Trip
            </Text>
          </Pressable>
        </View>

        <Text style={{ marginHorizontal: 20, fontSize: 17, fontWeight: "500" }}>
          Travel More and speend Less
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable
            style={{
              width: 200,
              height: 150,
              marginTop: 10,
              backgroundColor: "#427D71",
              borderRadius: 10,
              paddingHorizontal: 10,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
                marginVertical: 7,
              }}
            >
              Research
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "500",
                marginVertical: 7,
              }}
            >
              Prioritize destination research to understand culture, activities,
              and safety
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: 200,
              height: 150,
              marginTop: 10,
              borderColor: "#E0E0E0",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 20,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginVertical: 7,
              }}
            >
              Itinerary
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                marginVertical: 7,
              }}
            >
              Plan a flexible itinerary, allowing for spontaneity while covering
              must-see attractions.
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: 200,
              height: 150,
              marginTop: 10,
              borderColor: "#E0E0E0",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 20,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginVertical: 7,
              }}
            >
              Travel Insurance
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                marginVertical: 7,
              }}
            >
              Protect your trip with travel insurance for emergencies and
              cancellations.
            </Text>
          </Pressable>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
