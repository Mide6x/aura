import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

const RootLayout = () => {
  const [fontLoaded, error] = useFonts({
    "Poppins-Black": require("../fonts/Poppins-Black.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (useFonts) SplashScreen.hideAsync();
  }, [error]);

  if (!error) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
