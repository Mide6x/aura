import { View, Text, Image } from "react-native";
import React from "react";

import { images } from "../constants";

import ClickinButton from "../components/ClickinButton";
import { router } from "expo-router";

const Empty = ({ title, subtitle }) => {
  return (
    <View className="items-center justify-center px-6 mt-1">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />

      <Text className="font-pmedium text-sm text-gray-100 text-center">
        {title}
      </Text>
      <Text className="text-l font-semibold text-white text-center mt-2">
        {subtitle}
      </Text>
      <ClickinButton
        title="Create Video"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default Empty;
