import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import tw from "tailwind-react-native-classnames";
import MapDisplay from "../components/MapDisplay";
import NavigateInfoCard from "../components/NavigateInfoCard";
import RideOptionsCard from "../components/RideOptionsCard";

const Map = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <MapDisplay />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateInfoCard"
            component={NavigateInfoCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default Map;
