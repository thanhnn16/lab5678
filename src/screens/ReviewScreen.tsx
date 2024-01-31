import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import reviews from "../db/reviews";
import ReviewItem from "../components/ReviewItem";
import { detail } from "../assets/styles/MyStyles.tsx";

const ReviewScreen = () => {
  return (
    <SafeAreaView style={detail.container}>
      <View>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={(index) => index.toString()}
      />
      </View>
    </SafeAreaView>
  );
};

export default ReviewScreen;
