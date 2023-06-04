import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import axios from "axios";

export const registerForPushNotificationsAsync = async () => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    console.log("Failed to get push token for push notification!");
    return;
  }
  const token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log("Device Token:", token);
  // Save or send the device token to your server or Firebase database
};
export const sendNotification = async (expoPushToken, data) => {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Firescue",
    body: "Fire Alert",
    data, // Optional payload data
  };

  try {
    const response = await axios.post(
      "https://fcm.googleapis.com/fcm/send",
      message,
      {
        headers: {
          Authorization:
            "key=AAAA7TGW_mI:APA91bGMH24cTQVwyj52DjK4XOATkShSBMfmb3339mBYtT8VPAI6mrNTibBlWW0U2VvjZFG90bDiMQNOLcISoxo_tc0eS9atM_RLkpgXWdCjq0HchjslzxNdlocB-K4iiuBoG3Cx5-8A",
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Notification sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending notification:", error);
  }
};
