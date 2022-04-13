import React from "react";
import { View } from "react-native";
import NavigationOptions from "../components/NavigationOptions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navigationSlice";
import NavigationFavourites from "../components/NavigationFavourites";

const Home = () => {
  const edges = useSafeAreaInsets();
  const dispatch = useDispatch();

  return (
    <View
      style={{
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: edges.top + 60,
        paddingBottom: 25,
      }}
    >
      <GooglePlacesAutocomplete
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        placeholder="Where from?"
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: "en",
        }}
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          );

          dispatch(
            setDestination({
              location: null,
              description: null,
            })
          );
        }}
        fetchDetails={true}
      />
      <NavigationOptions />
      <NavigationFavourites />
    </View>
  );
};

export default Home;
