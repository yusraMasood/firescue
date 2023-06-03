import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
export const registerForPushNotificationsAsync = async () => {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
};

// import { Notifications } from "expo";
// import * as Permissions from "expo-permissions";

// export const registerForPushNotificationsAsyncasync = async () => {
//   const { status: existingStatus } = await Permissions.getAsync(
//     Permissions.NOTIFICATIONS
//   );
//   let finalStatus = existingStatus;

//   if (existingStatus !== "granted") {
//     const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//     finalStatus = status;
//   }

//   if (finalStatus !== "granted") {
//     console.log("Failed to get push token for push notification!");
//     return;
//   }

//   const token = await Notifications.getExpoPushTokenAsync();
//   console.log("Push token:", token);

//   // Save the token to Firebase or send it to your server for later use

//   // Add a listener to handle incoming notifications
//   Notifications.addNotificationReceivedListener(handleNotification);
// };

// function handleNotification(notification) {
//   console.log("Received notification:", notification);
// }

// function sendNotificationWithPayload() {
//   const notificationTitle = "New Message";
//   const notificationBody = "You have received a new message.";
//   const payload = {
//     // Your custom data
//     key1: "value1",
//     key2: "value2",
//   };

//   const message = {
//     notification: {
//       title: notificationTitle,
//       body: notificationBody,
//     },
//     data: payload,
//     token: "DEVICE_FCM_TOKEN", // The FCM token of
//   };
// }
