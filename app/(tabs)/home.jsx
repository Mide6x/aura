import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import Empty from "../../components/Empty";
import { Try } from "expo-router/build/views/Try";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const fetchData = async () => {
      setIsLoading(true);
    };

    try {
    } catch (error) {
      throw new Error(error);
    }

    fetchData();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);

    //recall posts/ videos

    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
        //data={[]} //shows a list of items
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-lg text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-4xl font-semibold text-white">
                  mide6x
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Trending Videos
              </Text>

              <Trending
                posts={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] ?? []}
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Empty
            title="Aw,there are currently no video uploads, please refresh now or
        try again later. 😔"
            subtitle="Or be the first to upload a video? 🤭"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
