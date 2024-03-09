import React from "react";
<<<<<<< HEAD
import { View,Text,TouchableOpacity, } from "react-native";

const WelcomeScreen=()=>{
    <View>
        <Text>Emreyrr</Text>
    </View>
}

=======
import { View, Image, Text, TouchableOpacity, Dimensions, Linking,StyleSheet } from 'react-native';


const { width, height } = Dimensions.get('window');

interface Props {
    navigation: any;
}

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
    const handleConnectPhantomWallet = () => {
        const phantomWalletUrl = 'https://phantom.app/';
        Linking.openURL(phantomWalletUrl)
        .catch(err => console.error("Couldn't load page", err));
    };

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
                onPress={handleConnectPhantomWallet} // onPress olayında fonksiyonu doğrudan çağırıyoruz
                style={styles.button_phantom}>
                <View style={styles.buttonContent}>
                    <Image
                        style={styles.icon}
                        source={require("../assets/Phantom.png")}
                    />
                    <Text style={styles.buttonText}>Connect your Phantom Wallet</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button_use}
                onPress={() => navigation.navigate('HomeScreen')}>
                <View style={styles.buttonContent}>
                    <Image
                        style={styles.icon}
                        source={require("../assets/worldicon.png")}
                    />
                    <Text style={styles.buttonText}>Use Famous Alert</Text>
                </View>
            </TouchableOpacity>
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
    button_phantom: {
        marginTop: 10,
        backgroundColor: "#532e71",
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

>>>>>>> e9296ad (Uygulama build edildi paketler yüklendi.)
export default WelcomeScreen;