import React, { useLayoutEffect, useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addTrip, savedPlaces } from "../redux/SavedReduser";
import { setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase1";

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Confirmation",
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
  const route = useRoute();
  const dispatch = useDispatch();
  const uid = auth.currentUser.uid;

  const confirmBooking = async () => {
    // Dispatch action to add the trip to your local SQLite database
    dispatch(addTrip(route.params));

    try {
      // Check if the document already exists in Firestore
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // Update the existing document in Firestore
        await updateDoc(docRef, {
          bookingDetails: route.params,
        });
      } else {
        // Create a new document in Firestore
        await setDoc(docRef, {
          bookingDetails: route.params,
        });
      }

      // Navigate to the Main screen
      navigation.navigate("Main", {
        id: route.params.id,
      });
    } catch (error) {
      console.error("Error while confirming booking:", error);
    }
  };
  return (
    <View>
      <Pressable style={{ backgroundColor: "white", margin: 10 }}>
        <View
          style={{
            marginHorizontal: 12,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "500", color: "gray" }}>
              Trip Name:{" "}
            </Text>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              {route.params.name}
            </Text>
          </View>
        </View>

        <View
          style={{
            margin: 12,
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
            {route.params.place}
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
                color: "gray",
              }}
            >
              From
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {route.params.selectedDates.startDate}
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 3,
                color: "gray",
              }}
            >
              Till
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {route.params.selectedDates.endDate}
            </Text>
          </View>
        </View>

        <Pressable
          onPress={confirmBooking}
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
            Book Now
          </Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({});
