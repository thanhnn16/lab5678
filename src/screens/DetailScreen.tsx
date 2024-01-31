import { View, Text, Button, SafeAreaView, Image, Pressable } from "react-native";
import { detail, reviewStyles, welcomeStyles } from "../assets/styles/MyStyles";

const DetailScreen = ({ navigation, route }) => {
  return (<View style={detail.container}>
    <Image
      source={require("../assets/images/product.png")}
      style={detail.productImage} />
    <Text style={detail.productTitle}>Minimal Stand</Text>

    <View style={detail.priceContainer}>
      <Text style={detail.productPrice}>$39.99</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable style={detail.adjustQtyBtn}>
          <Text>+</Text>
        </Pressable>
        <Text>1</Text>
        <Pressable style={detail.adjustQtyBtn}>
          <Text>-</Text>
        </Pressable>
      </View>
    </View>

    <Pressable style={detail.reviewsContainer}>
      <Image source={require("../assets/images/star.png")} style={reviewStyles.starIcon} />
      <Text style={reviewStyles.ratingText}>4.5</Text>
      <Text style={reviewStyles.dateText}> (23 reviews)</Text>
    </Pressable>

    <Text style={detail.productDescription}>
      Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home.
    </Text>

  </View>);
};

export default DetailScreen;
