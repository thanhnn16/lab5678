import { View, Text, Button, SafeAreaView } from "react-native";
import { welcomeStyles } from "../assets/styles/MyStyles";

const DetailScreen = ({ navigation, route }) => {
  // const { item } = route.params;
  return (<SafeAreaView style={welcomeStyles.container}>
    <Text style={welcomeStyles.title}>No item found</Text>
    <Button title="Logout" onPress={() => navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    })} />
  </SafeAreaView>);
};

export default DetailScreen;
