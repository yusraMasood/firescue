// import firebase from "./firebase";
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

// // Call the function to request permission and register for push notifications
