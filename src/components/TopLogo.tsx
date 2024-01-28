import { Image, View } from "react-native";
import { logoStyles, welcomeStyles } from "../assets/styles/MyStyles.tsx";

const TopLogo = () => {
  return (
    <View style={logoStyles.logoContainer}>
      <Image
        source={require('../assets/images/line.png')}
        style={logoStyles.lineImage}
      />
      <Image
        source={require('../assets/images/logo.png')}
        style={logoStyles.logo}
      />
      <Image
        source={require('../assets/images/line.png')}
        style={logoStyles.lineImage}
      />
    </View>
  )
}

export default TopLogo
