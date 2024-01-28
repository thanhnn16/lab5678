import { View, Text, Button, SafeAreaView, ImageBackground, Pressable } from "react-native";
import {welcomeStyles} from '../assets/styles/MyStyles';

// @ts-ignore
const WelcomeScreen = ({navigation, route}) => {
  return (
    <View style={welcomeStyles.container}
    >
      <ImageBackground source={require('../assets/images/background.png')} style={welcomeStyles.container}>
      <View style={welcomeStyles.header}>
        <Text style={welcomeStyles.subTitle}>MAKE YOUR</Text>
        <Text style={welcomeStyles.title}>HOME BEAUTIFUL</Text>
      </View>
      <Text style={welcomeStyles.text}>The best simple place where you discover most wonderful furnitures
        and make your home beautiful</Text>
      <Pressable style={welcomeStyles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={welcomeStyles.buttonText}>Get Started</Text>
      </Pressable>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
