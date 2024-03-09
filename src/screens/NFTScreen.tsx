import React from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions } from 'react-native';
import NFTCard from '../components/NFTCard';

const { width } = Dimensions.get('window');

const nftData = [
  {
    id: 1,
    title: 'Collesium',
    imageSource: require('../assets/nft1.jpg'),
    mintDate: '2023-03-01',
  },
  {
    id: 2,
    title: 'Collesium4',
    imageSource: require('../assets/nft2.jpg'),
    mintDate: '2023-03-01',
  },
  {
    id: 3,
    title: 'Collesium3',
    imageSource: require('../assets/nft1.jpg'),
    mintDate: '2023-03-01',
  },
  {
    id: 4,
    title: 'Collesium2',
    imageSource: require('../assets/nft3.jpg'),
    mintDate: '2023-03-01',
  },
  {
    id: 5,
    title: 'Collesium3',
    imageSource: require('../assets/nft4.jpg'),
    mintDate: '2023-03-01',
  },
  {
    id: 6,
    title: 'Collesium4',
    imageSource: require('../assets/nft1.jpg'),
    mintDate: '2023-03-01',
  },
  
];

const NFTScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>NFT Collection</Text>
      <FlatList
        data={nftData}
        renderItem={({ item }) => (
          <NFTCard
            title={item.title}
            imageSource={item.imageSource}
            mintDate={item.mintDate}
          />
        )}
        // İki sütunlu bir layout için numColumns prop'unu kullanın
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        // FlatList içerisindeki öğeler arasında boşluk bırakmak için contentContainerStyle kullanılabilir
        contentContainerStyle={styles.listContentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10, // Ekranın kenarlarına biraz boşluk ekleyin
  },
  header: {
    fontSize: 28, // Font boyutunu artırın
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Başlık rengi
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Metin gölgesi
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  listContentContainer: {
    alignItems: 'center', // Öğeleri merkeze almak için
  },
});

export default NFTScreen;
