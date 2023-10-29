import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveBookings = async (bookings) => {
  try {
    await AsyncStorage.setItem("bookings", JSON.stringify(bookings));
  } catch (error) {
    console.error("Error saving bookings to AsyncStorage:", error);
  }
};

export const loadBookings = async () => {
  try {
    const savedBookings = await AsyncStorage.getItem("bookings");
    if (savedBookings) {
      return JSON.parse(savedBookings);
    }
    return [];
  } catch (error) {
    console.error("Error loading bookings from AsyncStorage:", error);
    return [];
  }
};
