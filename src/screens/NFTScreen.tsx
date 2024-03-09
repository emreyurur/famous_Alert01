import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ImageSourcePropType } from 'react-native';
import NFTCard from '../components/NFTCard';
interface NFT {
  id: number;
  title: string;
  imageSource: ImageSourcePropType;
  mintDate: string;
}

const nftData: NFT[] = [
  {
    id: 1,
    title: 'Gizemli Dağ',
    imageSource: require('../assets/nft1.jpg'), // Yerel dosya yolu, gerçek yolu projenize göre ayarlayın
    mintDate: '2023-03-01',
  },
  {
    id: 2,
    title: 'Uzay Yolculuğu',
    imageSource: require('../assets/nft2.jpg'), // Yerel dosya yolu, gerçek yolu projenize göre ayarlayın
    mintDate: '2023-03-02',
  },
];

const NFTScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {nftData.map((nft) => (
        <NFTCard key={nft.id} title={nft.title} imageSource={nft.imageSource} mintDate={nft.mintDate} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

export default NFTScreen;
