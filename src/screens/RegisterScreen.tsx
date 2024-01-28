import { View, Text } from "react-native";
import { welcomeStyles } from "../assets/styles/MyStyles";

const RegisterScreen = ({navigation, route}) => {
    return (
        <View style={welcomeStyles.container}>
            <Text>Register Screen</Text>
        </View>
    );
}

export default RegisterScreen;
