import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontLoaded, error] = useFonts({
    "Poppins-Black": require("../fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../fonts/Poppins-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (useFonts) SplashScreen.hideAsync();
  }, [error]);

  if (!fontLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
