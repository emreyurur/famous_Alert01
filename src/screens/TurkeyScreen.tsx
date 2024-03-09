import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import TurkeySporScreen from "./TurkeyCategory/TurkeySporScreen";

const TurkeyScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
    // Alert.alert(`Kategori seçildi: ${category}`);
    if (category === "Spor") {
      navigation.navigate("TurkeySporScreen");
    }
    else if(category=="Kozmetik"){
        navigation.navigate("TurkeySporScreen")
    }
  };

  const categories = [
    "Bireysel Videolar",
    "Giyim & Aksesuar",
    "Oyun & Eğlence",
    "Spor",
    "Teknoloji",
    "Sağlıklı Yaşam",
    "Kozmetik",
    "Eğitim",
    "Anne & Bebek",
    "Müzik"
  ];

  const adjustedStyles = StyleSheet.create({
    categoryButton: {
      backgroundColor: "#9195F6", // Mor tonu
      borderRadius: 20,
      padding: 10,
      margin: 5,
      width: 150,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          Reklam Yaptırmak İstediğiniz Kategoriyi Seçiniz:
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, category === selectedCategory && styles.selectedButton]}
            onPress={() => handleCategoryPress(category)}
          >
            <Text style={styles.categoryButtonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bannerAdContainer}>
          <Image
            style={styles.bannerAdImage}
            source={require("../assets/famous_proje_photo.webp")}
          />
        </View>
        <View style={styles.contactInfoContainer}>
          <Text style={styles.contactInfoText}>
            Telefon: +90 532 123 45 67
          </Text>
          <Text style={styles.contactInfoText}>
            E-posta: info@example.com
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f7f7f7",
      padding: 20,
    },
    headerContainer: {
      marginBottom: 20,
    },
    headerText: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      color: "#333",
    },
    buttonContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      marginVertical: 20,
    },
    categoryButton: {
      backgroundColor: "#9195F6", // Mor tonu
      borderRadius: 20,
      padding: 10,
      margin: 5,
      width: 150,
      justifyContent: "center",
      alignItems: "center",
    },
    selectedButton: {
      backgroundColor: "#ff6600", 
    },
    categoryButtonText: {
      fontSize: 18,
      textAlign: "center",
      color: "#fff",
      fontWeight: "bold",
    },
    bottomContainer: {
      flex: 1,
      justifyContent: "flex-end",
    },
    bannerAdContainer: {
      backgroundColor: "#f0f0f0",
      borderRadius: 5,
      margin: 20,
    },
    bannerAdImage: {
      width: "100%",
      height: 100,
    },
    contactInfoContainer: {
      backgroundColor: "#e6e6e6", 
      borderRadius: 5,
      padding: 10,
      margin: 20,
    },
    contactInfoText: {
      fontSize: 16,
      textAlign: "center",
      color: "#333", 
    },
  });
  

  

export default TurkeyScreen;
