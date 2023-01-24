import React from "react";
import { FlatList, StyleSheet, Text, SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/restaurantinfo";

const RestaurantScreen = () => {
  return (
    <SafeAreaView style={theme.container}>
      <View style={theme.search}>
        <Searchbar />
      </View>
      <View style={theme.List}>
        <FlatList
          data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
          renderItem={() => <RestaurantInfo />}
          keyExtractor={(item) => {
            item.name;
          }}
          contentContainerStyle={{ padding: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

const theme = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    padding: 20,
    paddingBottom:15
  },
  List: {
    flex: 1,
    paddingTop: 0,
  },
});

export default RestaurantScreen;
