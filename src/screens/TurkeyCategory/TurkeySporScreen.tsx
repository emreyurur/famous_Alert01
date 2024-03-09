import React, { useState } from "react";
import { View, FlatList, StyleSheet, Text, Linking, Image, TouchableOpacity, Alert } from "react-native";
import FamousCard from "../../components/FamousCard";

interface Athlete {
  id: number;
  name: string;
  profession: string;
  imageSource: any;
  instagramUrl?: string;
  twitterUrl?: string;
  messageUrl?: string; 
}

const athletes: Athlete[] = [
  {
    id: 1,
    name: "Mauro Icardi",
    profession: "Futbolcu",
    imageSource: require("../../assets/icardi.jpg"),
    instagramUrl: "https://www.instagram.com/mauroicardi/",
    twitterUrl: "https://twitter.com/MauroIcardi",
    messageUrl: "IcardiMessageScreen", // Assuming this should navigate to the Icardi message screen
  },
  {
    id: 2,
    name: "Fatih Terim",
    profession: "Teknik Direktör",
    imageSource: require("../../assets/fatihterim.jpg"),
    instagramUrl: "https://www.instagram.com/fatihterim/",
    twitterUrl: "https://twitter.com/fatihterim",
    messageUrl: "IcardiMessageScreen"
  },
  {
    id: 3,
    name: "Fernando Muslera",
    profession: "Futbolcu",
    imageSource: require("../../assets/muslera.jpg"),
    instagramUrl: "https://www.instagram.com/fernandomuslera1/",
    twitterUrl: "https://twitter.com/fernandomuslera",
    messageUrl: "IcardiMessageScreen"
  },
];

const TurkeySporScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [selectedAthlete, setSelectedAthlete] = useState<Athlete | null>(null);

  const handleCardPress = (athlete: Athlete) => {
    setSelectedAthlete(athlete);
  };

  const handleInstagramIconPress = (url: string) => {
    if (url) {
      Linking.openURL(url);
    }
  };

  const handleTwitterIconPress = (url: string) => {
    if (url) {
      Linking.openURL(url);
    }
  };

  const handleMessageIconPress = () => {
    // Navigate to the specific message screen if the messageUrl matches
    if (selectedAthlete?.messageUrl === "IcardiMessageScreen") {
      navigation.navigate(selectedAthlete.messageUrl);
    } else if (selectedAthlete?.messageUrl) {
      Linking.openURL(selectedAthlete.messageUrl);
    } else {
      Alert.alert("Message Url not provided");
    }
  };

  const renderItem = ({ item }: { item: Athlete }) => (
    <View style={styles.itemContainer}>
      <FamousCard
        name={item.name}
        profession={item.profession}
        imageSource={item.imageSource}
        onPress={() => handleCardPress(item)}
        instagramUrl={item.instagramUrl || ""}
        twitterUrl={item.twitterUrl || ""}
        messageUrl={item.messageUrl || ""}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Türkiye Sporu</Text>
      <FlatList
        data={athletes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      {selectedAthlete && (
        <View style={styles.selectedAthleteContainer}>
          <Image style={styles.selectedAthleteImage} source={selectedAthlete.imageSource} />
          <Text style={styles.selectedAthleteName}>{selectedAthlete.name}</Text>
          <Text style={styles.selectedAthleteProfession}>{selectedAthlete.profession}</Text>
          <View style={styles.selectedAthleteIcons}>
            <TouchableOpacity onPress={() => handleInstagramIconPress(selectedAthlete.instagramUrl || "")}>
              <Image style={styles.icon} source={require("../../assets/instagram.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTwitterIconPress(selectedAthlete.twitterUrl || "")}>
              <Image style={styles.icon} source={require("../../assets/twitter.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleMessageIconPress}>
              <Image style={styles.icon} source={require("../../assets/message.png")} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 10,
  },
  selectedAthleteContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginTop: 20,
  },
  selectedAthleteImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  selectedAthleteName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  selectedAthleteProfession: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  selectedAthleteIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
});

export default TurkeySporScreen;
