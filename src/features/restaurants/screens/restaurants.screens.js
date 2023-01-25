import React, { createContext, useContext } from "react";
import { FlatList, StyleSheet, Text, SafeAreaView, View } from "react-native";
import RestaurantInfo from "../components/restaurantinfo";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import {Search} from  "../components/search.component";

const RestaurantScreen = () => {
  const { restaurant, isLoading, error } = useContext(RestaurantContext);
  return (
    <SafeAreaView style={theme.container}>
      {isLoading && (
        <View style={{position:"absolute" , top:"50%",left:"50%"}}>
          <ActivityIndicator size={50} style={{ marginLeft: -25 }} animating={true} color={MD2Colors.blue300} />
        </View>
      )}
      <View style={theme.search}>
        <Search/>
      </View>
      <View style={theme.List}>
        <FlatList
          data={restaurant}
         
          keyExtractor={(item,index) => {
            return item.name;
          }}
          renderItem={({ item }) => {
            return <RestaurantInfo restaurants={item} />;
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
    paddingBottom: 15,
  },
  List: {
    flex: 1,
    paddingTop: 0,
  },
});

export default RestaurantScreen;
