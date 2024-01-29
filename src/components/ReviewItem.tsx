import { View, Text } from "react-native";
import { reviewStyles } from "../assets/styles/MyStyles";
import { formatDate } from "../utils/dateUtils";

const ReviewItem = ({ review }: { review: Review }) => {
    return (
        <View style={reviewStyles.itemContainer}>
            <View style={reviewStyles.ratingContainer}>
                <Text style={reviewStyles.starIcon}>{review.star}</Text>
            </View>
            <View style={reviewStyles.contentContainer}>
                <Text style={reviewStyles.nameText}>{review.name}</Text>
                <Text style={reviewStyles.commentText}>{review.comment}</Text>
                <Text style={reviewStyles.dateText}>{review.date}</Text>
            </View>
        </View>
    );
}

type Review = {
    name: string,
    comment: string,
    star: number,
    date: string,
}

export default ReviewItem;
