import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import { auth } from "../firebase1";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
  const user = auth.currentUser;
  const userEmail = user ? user.name || user.email : "Guest";

  const navigation = useNavigation();
  const signOutUser = async () => {
    try {
      await signOut(auth);
      await AsyncStorage.clear();
      navigation.replace("Login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable style={{ marginVertical: 10 }}>
        <Text>Welcome {userEmail}</Text>
      </Pressable>
      <Pressable
        onPress={signOutUser}
        style={{
          width: 200,
          backgroundColor: "#427D71",
          padding: 15,
          borderRadius: 7,
          marginTop: 50,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Sign Out
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
