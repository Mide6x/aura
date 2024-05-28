import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Image } from "react-native";
import { Link } from "expo-router";
import { React } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";

export default function index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[300px] w-full h-[304px]"
            resizeMode="contain"
          />
        </View>
        <View className="relative mt-5">
          <Text className="font-bold text-3xl text-white text-center">
            Discover Endless Possibilities With{" "}
            <Text className="text-secondary-200">Aura</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
