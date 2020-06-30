import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <AuthForm
          headerText="Sign In to Your Account"
          errorMessage=""
          onSubmit={() => {}}
          submitButtonText="Sign In"
        />
        <NavLink
          text="Dont have an account? Sign up instead."
          routeName="Signup"
        />
      </View>
    </>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});
