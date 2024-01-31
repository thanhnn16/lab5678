import { View, Text, Button, SafeAreaView, Image, Pressable } from "react-native";
import { detail, reviewStyles, welcomeStyles } from "../assets/styles/MyStyles";
import { useState } from "react";

const DetailScreen = ({ navigation, route }) => {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(39.99);

  const handleAdjustQty = (type: string) => {
    console.log(type);
    if (type === "increase") {
      setCount(count + 1);
      setTotal(total + 39.99);
    } else {
      if (count > 1) {
        setCount(count - 1);
        setTotal(total - 39.99);
      }
    }
  }

  return (<View style={detail.container}>
    <Image
      source={require("../assets/images/product.png")}
      style={detail.productImage} />
    <Text style={detail.productTitle}>Minimal Stand</Text>

    <View style={detail.priceContainer}>
      <Text style={detail.productPrice}>{total}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable style={detail.adjustQtyBtn}
        onPress={() => handleAdjustQty("increase")}>
          <Text>+</Text>
        </Pressable>
        <Text>{count}</Text>
        <Pressable style={detail.adjustQtyBtn}
          onPress={() => handleAdjustQty("decrease")}>
          <Text>-</Text>
        </Pressable>
      </View>
    </View>

    <Pressable style={detail.reviewsContainer}
    onPress={() => navigation.navigate("Reviews")}
    >
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
