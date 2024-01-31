import { View, Text, Image, SafeAreaView } from "react-native";
import { reviewStyles } from "../assets/styles/MyStyles";
import { formatDate } from "../utils/dateUtils";

const ReviewItem = ({ review }: { review: Review }) => {
  const stars = Array(review.star).fill(0);

  return (
    <SafeAreaView style={[reviewStyles.container]}>
      <View style={reviewStyles.itemContainer}>

        <View style={reviewStyles.ratingContainer}>
          <Image
            source={require("../assets/images/product.png")}
            style={reviewStyles.smallProductImage} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {stars.map((_, index) => (
              <Text key={index} style={reviewStyles.starIcon}>⭐</Text>
            ))}
          </View>

        </View>
        <View style={reviewStyles.contentContainer}>
          <Text style={reviewStyles.nameText}>{review.name}</Text>
          <Text style={reviewStyles.commentText}>{review.comment}</Text>
          <Text style={reviewStyles.dateText}>{review.date}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

type Review = {
  name: string,
  comment: string,
  star: number,
  date: string,
}

export default ReviewItem;
