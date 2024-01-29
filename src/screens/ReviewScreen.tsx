import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import reviews from "../db/reviews";
import ReviewItem from "../components/ReviewItem";

const ReviewScreen = () => {
    return (
        <SafeAreaView>
            <Text>Review Screen</Text>
            <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={(index) => index.toString()}
            />
        </SafeAreaView>
    );
}

export default ReviewScreen;
