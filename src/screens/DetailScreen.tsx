import { View, Text, Button, SafeAreaView, Image, Pressable } from "react-native";
import { detail, reviewStyles, welcomeStyles } from "../assets/styles/MyStyles";
import { useState } from "react";
import reviews from "../db/reviews.ts";

// @ts-ignore
const DetailScreen = ({ navigation }) => {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(39.99);
  const [reviewsCount, setReviewsCount] = useState(() => {
    return reviews.length;
  });

  const [starAvg, setStarAvg] = useState(() => {
    let weightedSum = 0;
    let totalWeight = 0;
    for (let i = 0; i < reviews.length; i++) {
      const weight = i + 1;
      weightedSum += reviews[i].star * weight;
      totalWeight += weight;
    }
    return weightedSum / totalWeight;
  });

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
  };

  return (<View style={detail.container}>
      <Image
        source={require("../assets/images/product.png")}
        style={detail.productImage} />
      <Text style={detail.productTitle}>Minimal Stand</Text>

      <View style={detail.priceContainer}>
        <Text style={detail.productPrice}>$ {total.toFixed(2)}</Text>
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
        <Text style={reviewStyles.ratingText}>{starAvg.toFixed(1)}</Text>
        <Text style={reviewStyles.dateText}> ({reviewsCount} reviews)</Text>
      </Pressable>

      <Text style={detail.productDescription}>
        Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the
        best furnitures in any family for now. With 3 different colors, you can easily select the best match for your
        home.
      </Text>

      <View style={detail.footer}>
        <Pressable style={detail.bookmarkProductImage}>
          <Image source={require("../assets/images/bookmark-white.png")}
                 style={detail.bookmarkProductImage}
          />
        </Pressable>
        <Pressable style={detail.addToCartBtnContainer}>
          <Text style={detail.addToCartBtnText}>Add to cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DetailScreen;
