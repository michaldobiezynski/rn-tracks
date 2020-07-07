// import "../_mockLocation";

import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";

import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);

  const [err] = useLocation((location) => addLocation(location));

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2 style={{ fontSize: 48 }}>
        Create a track
      </Text>
      <Map />

      {err ? <Text>Please enable location services.</Text> : null}
    </SafeAreaView>
  );
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({});
