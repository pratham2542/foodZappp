import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, ThemeProvider } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "./star";
import open from "./open";

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Dominos",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/10/domino-s-pizza-1571307449.jpg",
    ],
    address = "A-204 LNMIIT,jaipur",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarly = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <View style={{ flex: 1 ,marginBottom:20}}>
      <Card elevation={5} style={theme.Card}>
        <Card.Cover
          key={name}
          source={{ uri: photos[0] }}
          style={theme.cover}
        />
        {/* <Image key={name}
          source={{ uri: photos[0] }}
          style={theme.cover}/> */}
        <View style={theme.info}>
          <Text style={theme.title}>{name}</Text>
          <View style={theme.rating}>
            <View style={theme.stars}>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </View>
            <View style={theme.stars}>
              {isClosedTemporarly && (
                <Text style={{ color: "red" ,fontSize:13}}>
                  CLOSED TEMPORARILY
                </Text>
              )}
              <View style={{ paddingLeft: 15 }} />
              {isOpenNow && <SvgXml xml={open} width={25} height={25} />}
              <View style={{ paddingLeft: 15 }} />
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </View>
          </View>

          <Text style={theme.address}>{address}</Text>
        </View>
      </Card>
    </View>
  );
};

const theme = StyleSheet.create({
  Card: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  cover: {
    padding: 15,
    backgroundColor: "white",
    // margin:17,
    height:225,
    // borderRadius:5,
  },
  title: {
    // padding: 15,
    paddingTop: 5,
    // paddingBottom: 5,
  },
  address: {
    // padding: 15,
    paddingTop: 0,
  },
  info: {
    padding: 15,
    paddingTop: 0,
    paddingLeft: 20,
  },
  stars: {
    flexDirection: "row",
    marginBottom: 3,
    marginTop: 8,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default RestaurantInfo;
