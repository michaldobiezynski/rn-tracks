import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

import Spacer from "./Spacer";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <Spacer>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.link}>{text}</Text>
        </Spacer>
      </TouchableOpacity>
    </Spacer>
  );
};

export default withNavigation(NavLink);

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});
