import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

const Countries = ({ countryCode }: { countryCode: string }) => {
  const [flag, setFlag] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryFlag = async () => {
      try {
        const response = await fetch(`https://countriesnow.space/api/v0.1/countries/flag/unicode/${countryCode}`);
        const data = await response.json();
        setFlag(data.data.unicodeFlag);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching country flag:", error);
        setLoading(false);
      }
    };

    fetchCountryFlag();
  }, [countryCode]);

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.flag}>{flag}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#070F2B",
    padding: 20,
    borderRadius: 10,
  },
  loadingContainer: {
    height: 50,
  },
  flag: {
    fontSize: 48,
  },
});

export default Countries;
