import { StatusBar, StyleSheet, Text, SafeAreaView, View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantScreen from "./src/features/restaurants/screens/restaurants.screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantContextProvider } from "./src/services/restaurant/restaurant.context";
import { LocationContextProvider } from "./src/services/location/location.context";

const Tab = createBottomTabNavigator();

Settings = () => {
  return <Text>settings</Text>;
};
Maps = () => {
  return <Text>Maps</Text>;
};

export default function App() {
  return (
    <SafeAreaView style={theme.container}>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: { height: 60, paddingBottom: 10, paddingTop: 0 },
                tabBarIconStyle: { padding: 0 },
                tabBarIcon: ({ color, size }) => {
                  let iconName;

                  if (route.name === "Restaurants") {
                    iconName = "md-restaurant";
                  } else if (route.name === "Settings") {
                    iconName = "md-settings";
                  } else if (route.name === "Map") {
                    iconName = "md-map";
                  }
                  return (
                    <Ionicons
                      name={iconName}
                      size={size}
                      color={color}
                      style={{ paddingTop: 5 }}
                    />
                  );
                },

                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen name="Restaurants" component={RestaurantScreen} />
              <Tab.Screen name="Map" component={Maps} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantContextProvider>
      </LocationContextProvider>

      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}
const theme = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
