import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface FamousCardProps {
  imageSource: ImageSourcePropType;
  name: string;
  profession: string;
  onPress: () => void;
  instagramUrl: string;
  twitterUrl: string;
  messageUrl?: string;
}

const FamousCard: React.FC<FamousCardProps> = ({ imageSource, name, profession, onPress, instagramUrl, twitterUrl, messageUrl }) => {
  const navigation = useNavigation(); // Move useNavigation inside the component

  const handleInstagramIconPress = () => {
    if (typeof instagramUrl === 'string') {
      Linking.openURL(instagramUrl);
    } else {
      console.error("Instagram URL'si geçersiz.");
    }
  };
  
  const handleTwitterIconPress = () => {
    if (typeof twitterUrl === 'string') {
      Linking.openURL(twitterUrl);
    } else {
      console.error("Twitter URL'si geçersiz.");
    }
  };

  const handleMessageIconPress = () => {
    if(typeof messageUrl==="string"){
      navigation.navigate("MessageScreen");
    }else{
      console.error("Message ekranına bağlantısı geçersiz.")
    }
  };
  
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{profession}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleMessageIconPress}>
            <Image source={require("../assets/message.png")} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTwitterIconPress}>
            <Image source={require("../assets/twitter.png")} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleInstagramIconPress}>
            <Image source={require("../assets/instagram.png")} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333333", // Metin rengini değiştir
  },
  profession: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});

export default FamousCard;
