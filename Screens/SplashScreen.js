import { View, Text } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 2450);
  }, []);
  return (
    <View style={{ backgroundColor: "#427D71", flex: 1 }}>
      <View style={{ alignSelf: "center", marginVertical: "100%" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
          Welcome To Trip Planning App
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
