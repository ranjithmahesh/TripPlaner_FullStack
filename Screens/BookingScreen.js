import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteTrip } from "../redux/SavedReduser";
import { useRoute } from "@react-navigation/native";

const BookingScreen = () => {
  // console.log("bookings=" + bookings);
  const bookings = useSelector((state) => state.booking.booking);
  const route = useRoute();

  const dispatch = useDispatch();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Bookings",
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
    });
  }, []);
 
 


  return (
    <ScrollView>
      {bookings.length === 0 && (
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 150,
            marginTop: 150,
          }}
        >
          No Bookings Found!
        </Text>
      )}
      {bookings.length > 0 &&
        bookings
          .slice(0)
          .reverse()
          .map((item, i) => (
            <ScrollView
              key={i}
              style={{
                backgroundColor: "white",
                marginVertical: 10,
                marginHorizontal: 20,
                borderColor: "#E0E0E0",
                borderWidth: 1,
                padding: 14,
                borderRadius: 6,
              }}
            >
              <View>
                <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                  <Text
                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                  >
                    Trip Name:{" "}
                  </Text>
                  <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    {item.name}
                  </Text>
                  <Pressable
                    style={{ marginLeft: "auto" }}
                    onPress={() => {
                      dispatch(deleteTrip(item.id)), console.log("done");
                    }}
                  >
                    <AntDesign name="closecircleo" size={24} color="black" />
                  </Pressable>
                </View>

                <View
                  style={{
                    marginVertical: 12,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      marginBottom: 3,
                      color: "gray",
                    }}
                  >
                    Destination:{"  "}
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {item.place}
                  </Text>
                </View>

                <View
                  style={{
                    margin: 12,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 60,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "600",
                        marginBottom: 3,
                      }}
                    >
                      From
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      {item.selectedDates.startDate}
                    </Text>
                  </View>

                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "600",
                        marginBottom: 3,
                      }}
                    >
                      To
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      {item.selectedDates.endDate}
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate("AddTask", {
                        selectedDates: item.selectedDates,
                        id: item.id,
                      });
                    }}
                    style={{
                      backgroundColor: "#427D71",
                      width: 120,
                      padding: 5,
                      marginHorizontal: 12,
                      marginBottom: 20,
                      borderRadius: 4,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                    >
                      Add Task
                    </Text>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          ))}
    </ScrollView>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({});
