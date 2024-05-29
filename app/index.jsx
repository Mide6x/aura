import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { React } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import ClickinButton from "../components/ClickinButton";

export default function index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full flex justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="font-bold text-3xl text-white text-center">
              Discover Endless {"\n"} Possibilities With{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Get on an amazing Journey of
            Exploration with Aora
          </Text>
          <ClickinButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
