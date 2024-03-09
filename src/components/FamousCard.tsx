import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface FamousCardProps {
  name: string;
  profession: string;
  imageSource: any;
  onPress: () => void;
  instagramUrl: string;
  twitterUrl: string;
  messageUrl: string;
}

const FamousCard: React.FC<FamousCardProps> = ({
  name,
  profession,
  imageSource,
  onPress,
  instagramUrl,
  twitterUrl,
  messageUrl,
}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{profession}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profession: {
    fontSize: 16,
    color: "#666",
  },
});

export default FamousCard;
