import { View, Text } from "react-native";
import { inputStyles, loginStyles, welcomeStyles } from "../assets/styles/MyStyles";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopLogo from "../components/TopLogo";
import { NormalInput, PasswordInput } from "../components/InputField";

// @ts-ignore
const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [rePasswordVisible, setRePasswordVisible] = useState(false)

    const [nameError, setNameError] = useState(' ')
    const [emailError, setEmailError] = useState(' ')
    const [passwordError, setPasswordError] = useState(' ')
    const [rePasswordError, setRePasswordError] = useState(' ')

    return (
        <SafeAreaView style={loginStyles.container}>
            <TopLogo />

            <View style={{ marginHorizontal: 32 }}>

                <NormalInput placeHolder={'Name'} value={name} onChangeText={setName} />

                <Text style={inputStyles.errorText}>{nameError}</Text>

                <NormalInput placeHolder={'Email'} value={email} onChangeText={setEmail} />

                <Text style={inputStyles.errorText}>{emailError}</Text>

                <PasswordInput placeHolder={'Password'} value={password} onChangeText={setPassword}
                    onClick={() => setPasswordVisible(!passwordVisible)} secureTextEntry={!passwordVisible} />

                <Text style={inputStyles.errorText}>{passwordError}</Text>

                <PasswordInput placeHolder={'Confirm password'} value={rePassword} onChangeText={setRePassword}
                    onClick={() => setRePasswordVisible(!rePasswordVisible)} secureTextEntry={!rePasswordVisible} />

                <Text style={inputStyles.errorText}>{rePasswordError}</Text>

            </View>

            <View style={loginStyles.buttonContainer}>
                <Text style={loginStyles.buttonText}>Register</Text>
            </View>

            <View style={welcomeStyles.footer}>
                <Text style={loginStyles.forgotPasswordText} onPress={() => navigation.navigate('Login')}>Already have an account?</Text>
            </View>

        </SafeAreaView>
    );
}

export default RegisterScreen;
