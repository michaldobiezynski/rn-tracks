import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      </View>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="Go to main flow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
