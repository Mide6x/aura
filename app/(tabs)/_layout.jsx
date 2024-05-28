import { Text, View, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";
import Home from "./home";

const TabIcon = ({ name, icon, color, focused }) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.upload}
                color={color}
                name="Upload"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmarks"
          options={{
            title: "Bookmarks",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="bookmark"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
