import {
  View,
  Text,
  KeyboardAvoidingView,
  Pressable,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { inputStyles, loginStyles, welcomeStyles } from "../assets/styles/MyStyles";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopLogo from "../components/TopLogo";
import { NormalInput, PasswordInput } from "../components/InputField";

// @ts-ignore
const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);

  const [nameError, setNameError] = useState(" ");
  const [emailError, setEmailError] = useState(" ");
  const [passwordError, setPasswordError] = useState(" ");
  const [rePasswordError, setRePasswordError] = useState(" ");

  return (
    <SafeAreaView style={loginStyles.container}>
      <TopLogo />
      <Text style={loginStyles.welcomeBackText}>Welcome</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={[{ marginHorizontal: 32 }, { marginTop: 24 }]}>

            <NormalInput placeholder={"Name"} value={name} onChangeText={(text) => {
              if (text.length > 0 && text.length < 3) {
                setNameError("Name must be at least 3 characters");
              } else if (text === "") {
                setNameError("Name is required");
              } else {
                setNameError(" ");
              }
              setName(text);
            }} />

            <Text style={inputStyles.errorText}>{nameError}</Text>

            <View style={[{ marginTop: 8 }]} />

            <NormalInput placeholder={"Email"} value={email} onChangeText={(text) => {
              if (text === "") {
                setEmailError("Email is required");
              } else if (!text.includes("@")) {
                setEmailError("Invalid email");
              } else {
                setEmailError(" ");
              }
              setEmail(text);
            }} />

            <Text style={inputStyles.errorText}>{emailError}</Text>

            <View style={[{ marginTop: 8 }]} />


            <PasswordInput placeholder={"Password"} value={password} onChangeText={(text) => {
              if (text === "") {
                setPasswordError("Password is required");
              } else if (text.length < 6) {
                setPasswordError("Password must be at least 6 characters");
              } else {
                setPasswordError(" ");
              }
              setPassword(text);
            }}
                           onPress={() => setPasswordVisible(!passwordVisible)} secureTextEntry={!passwordVisible} />

            <Text style={inputStyles.errorText}>{passwordError}</Text>

            <View style={[{ marginTop: 8 }]} />


            <PasswordInput placeholder={"Confirm password"} value={rePassword} onChangeText={(text) => {
              if (text === "") {
                setRePasswordError("Password is required");
              } else if (text !== password) {
                setRePasswordError("Password does not match");
              } else if (text.length < 6) {
                setRePasswordError("Password must be at least 6 characters");
              } else {
                setRePasswordError(" ");
              }
              setRePassword(text);
            }}
                           onPress={() => setRePasswordVisible(!rePasswordVisible)}
                           secureTextEntry={!rePasswordVisible} />

            <Text style={inputStyles.errorText}>{rePasswordError}</Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style={[{ marginTop: 8 }]} />

      <Pressable onPress={() => {
        if (nameError !== " " || emailError !== " " || passwordError !== " " || rePasswordError !== " ") {
          return;
        }
        const user = {
          email,
          password
        };
        console.log(user);
        navigation.navigate("Login", { user })
      }} style={loginStyles.buttonContainer}>
        <Text style={loginStyles.buttonText}>SIGN UP</Text>
      </Pressable>

      <View style={welcomeStyles.footer}>
        <Text style={loginStyles.secondaryText}>Already have an account?</Text>
        <Text style={loginStyles.forgotPasswordText} onPress={() => {

          navigation.navigate("Login");
        }}> SIGN IN</Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
