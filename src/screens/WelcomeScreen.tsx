import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Linking } from "react-native";
import { useWalletConnectModal } from "@walletconnect/modal-react-native";

const { width, height } = Dimensions.get('window');

interface Props {
  navigation: any;
}

const projectId = "0b316d97d419b21fa8f34dc0d1b3f4df"; // Bu kısmı gerçek projenizdeki ID ile değiştirin
const providerMetadata = {
  name: ".MainApplication", 
  description: "Reklam uygulaması",
  url: "https://phantom.app/", 
  icons: ["@mipmap/ic_launcher"],
  
  redirect: {
    native: "famous_alert://",
    universal: "android.permission.INTERNET",
  },
};

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const { open, isConnected, address, provider } = useWalletConnectModal();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/famous_proje_photo.webp")}
      />
      <Text style={styles.header}>Famous Alert</Text>
      <Text style={styles.subtitle}>
        "Reach out to the celebrities you admire, advertise your business."
      </Text>

      <TouchableOpacity
          style={styles.button_use}
          onPress={() => {
            if (isConnected) {
              provider?.disconnect();
            } else {
              open();
            }
          }}>
          <View style={styles.buttonContent}>
              <Image
                  style={styles.icon}
                  source={require("../assets/wallet.png")}
              />
              <Text style={styles.buttonText}>{isConnected ? "Disconnect Wallet" : "Connect Wallet"}</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.button_use}
          onPress={() => navigation.navigate('HomeScreen')}>
          <View style={styles.buttonContent}>
              <Image
                  style={styles.icon}
                  source={require("../assets/earth.png")}
              />
              <Text style={styles.buttonText}>Use Famous Alert</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.button_use}
          onPress={() => navigation.navigate('NFTScreen')}>
          <View style={styles.buttonContent}>
              <Image
                  style={styles.icon}
                  source={require("../assets/wallet.png")}
              />
              <Text style={styles.buttonText}>NFT Collection</Text>
          </View>
      </TouchableOpacity>
      <Text>{isConnected ? `Connected: ${address}` : "Wallet Not Connected"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#F5F5F5',
  },
  header: {
      fontSize: width * 0.1,
      fontWeight: "bold",
      color: '#333333',
      marginBottom: height * 0.01,
  },
  image: {
      height: height * 0.3,
      width: width * 0.6,
      borderRadius: 20,
      marginBottom: 20,
  },
  subtitle: {
      textAlign: "center",
      fontSize: width * 0.04,
      fontStyle: "italic",
      color: '#555555',
      marginHorizontal: 20,
      marginBottom: 20,
  },
  button_use: {
      marginTop: 10,
      backgroundColor: "#4a148c",
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 10,
      width: width * 0.8,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  },
  buttonContent: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
  },
  buttonText: {
      color: "#FFFFFF",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center"
  },
  icon: {
      height: 30,
      width: 30,
      marginRight: 10
  }
});

export default WelcomeScreen;
