import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import { React } from "react";

export default function index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Aura!</Text>
      <StatusBar style="auto" />
      <Link href="profile" style={{ color: "blue" }}>
        Go to profile
      </Link>
    </View>
  );
}
