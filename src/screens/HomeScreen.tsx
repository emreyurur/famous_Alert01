import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import axios from "axios";


const { width } = Dimensions.get('window');

interface Country {
    name: string;
    unicodeFlag: string;
  }
  

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [searchText, setSearchText] = useState('');
  
    useEffect(() => {
      const fetchCountries = async () => {
        try {
          const response = await axios.get('https://countriesnow.space/api/v0.1/countries/flag/unicode');
          if (response.data && Array.isArray(response.data.data)) {
            setCountries(response.data.data.map((item: any) => ({ name: item.name, unicodeFlag: item.unicodeFlag })));
          } else {
            console.error("API response data is not an array:", response.data);
          }
        } catch (error) {
          console.error("Error fetching countries:", error);
        }
      };
  
      fetchCountries();
    }, []);
  
    const filteredCountries = searchText.length === 0 
      ? countries 
      : countries.filter((country) =>
          country.name.toLowerCase().includes(searchText.toLowerCase())
        );
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search for a country..."
          placeholderTextColor={colors.inputText}
          onChangeText={setSearchText}
          value={searchText}
        />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {filteredCountries.map((country, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => {
                if (country.name === "Turkey") {
                  navigation.navigate('TurkeyScreen');
                } else {
                  navigation.navigate('Country', { countryName: country.name });
                }
              }}
            >
              <Text style={styles.flagText}>{country.unicodeFlag}</Text>
              <Text style={styles.cardText}>{country.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };

const colors = {
    background: "#f0f2f5",
    primary: "#007bff",
    text: "#495057",
    title: "#212529",
    inputBackground: "#ffffff",
    inputText: "#000000",
  };
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: colors.background,
      paddingTop: 20,
    },
    card: {
      width: width * 0.45,
      margin: 5,
      padding: 10,
      backgroundColor: colors.primary,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    cardText: {
      color: colors.text,
      marginTop: 10,
      fontSize: 18, 
      fontWeight: 'bold',
    },
    flagText: {
      fontSize: 50,
    },
    input: {
      height: 40,
      width: width * 0.9,
      backgroundColor: colors.inputBackground,
      borderColor: colors.primary,
      borderWidth: 1,
      borderRadius: 20,
      padding: 10,
      color: colors.inputText,
      marginBottom: 20,
    },
  });
  

export default HomeScreen;
