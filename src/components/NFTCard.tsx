import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface NFTCardProps {
  title: string;
  imageSource: ImageSourcePropType; // Yerel ve uzaktan yüklenen resimleri destekler
  mintDate: string;
}

const NFTCard: React.FC<NFTCardProps> = ({ title, imageSource, mintDate }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>Minted: {mintDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default NFTCard;
