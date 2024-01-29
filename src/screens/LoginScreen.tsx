import { View, Text, SafeAreaView, Pressable } from "react-native";
import { inputStyles, loginStyles, welcomeStyles } from "../assets/styles/MyStyles";
import TopLogo from "../components/TopLogo.tsx";
import { NormalInput, PasswordInput } from "../components/InputField.tsx";
import React, { useEffect, useState } from "react";

// @ts-ignore
const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [emailError, setEmailError] = useState(" ");
  const [passwordError, setPasswordError] = useState(" ");

  const handleLogin = () => {
    const registeredUser = route.params?.user;
    console.log(registeredUser);
    if (email !== "" && password !== "") {
      navigation.navigate("Details");
    }
  };

  useEffect(() => {
    console.log("initial render");
    return () => {
      if (email === "") {
        setEmailError("Email is required");
      } else if (!email.includes("@")) {
        setEmailError("Invalid email");
      } else {
        setEmailError(" ");
      }
      if (password === "") {
        setPasswordError("Password is required");
      } else if (password.length < 6) {
        setPasswordError("Password must be at least 6 characters");
      } else {
        setPasswordError(" ");
      }
    }
  }, [email, password]);

  return (
    <SafeAreaView style={loginStyles.container}>
      <TopLogo />
      <Text style={loginStyles.helloText}>Hello !</Text>
      <Text style={loginStyles.welcomeBackText}>Welcome Back</Text>
      <View style={[{ marginHorizontal: 32 }, { marginTop: 64 }]}>
        <NormalInput placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text style={inputStyles.errorText}>{emailError}</Text>
        <View style={[{ marginTop: 32 }]} />
        <PasswordInput placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        />
        <Text style={inputStyles.errorText}>{passwordError}</Text>
      </View>

      <View style={[{ marginTop: 16 }]} />

      <Text style={loginStyles.forgotPasswordText}>Forgot Password?</Text>

      <View style={[{ marginTop: 16 }]} />

      <Pressable style={loginStyles.buttonContainer} onPress={handleLogin}>
        <Text style={loginStyles.buttonText}>Login</Text>
      </Pressable>

      <View style={[{ marginTop: 16 }]} />

      <Text style={loginStyles.forgotPasswordText} onPress={() => navigation.navigate("Register")}>SIGN UP</Text>

    </SafeAreaView>
  );
}
  ;

export default LoginScreen;
