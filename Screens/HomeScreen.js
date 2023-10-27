import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { Feather } from "@expo/vector-icons";
<Text>Search</Text>;
import {
  ScrollView,
  View,
  Pressable,
  TextInput,
  Button,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
// import { BottomModal } from "react-native-modals";
// import { ModalFooter } from "react-native-modals";
// import { ModalButton } from "react-native-modals";
// import { ModalTitle } from "react-native-modals";
// import { SlideAnimation } from "react-native-modals";
// import { ModalContent } from "react-native-modals";
const HomeScreen = () => {
  const navigation = useNavigation();
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
            <TextInput placeholder="Enter Trip Name" />
          </Pressable>
          {/* Destination */}
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
            <Feather name="search" size={24} color="black" />
            <TextInput placeholder="Enter Trip Destination" />
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
              Search
            </Text>
          </Pressable>
        </View>

        <Text>Travel More and speend Less</Text>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
