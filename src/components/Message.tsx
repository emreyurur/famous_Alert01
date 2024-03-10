import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface MessageProps {
  text: string;
  isCurrentUser?: boolean;
}

const Message: React.FC<MessageProps> = ({ text, isCurrentUser = false }) => {
  const messageStyle = isCurrentUser ? styles.currentUserMessage : styles.message;

  return (
    <View style={messageStyle}>
      <Text style={styles.messageText}>{text}</Text>
      <Image
        style={styles.messageImage}
        source={require("../assets/message.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    message: {
      backgroundColor: "#ffffff",
      borderRadius: 20,
      padding: 15, // Artırılmış padding
      marginBottom: 15, // Artırılmış marginBottom
      maxWidth: "80%",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    currentUserMessage: {
      backgroundColor: "#DCF8C6",
      borderRadius: 20,
      padding: 15, // Artırılmış padding
      marginBottom: 15, // Artırılmış marginBottom
      maxWidth: "80%",
      alignSelf: "flex-end",
    },
    messageText: {
      fontSize: 18, // Artırılmış font büyüklüğü
      color: "#212121",
      marginBottom: 10, // Artırılmış marginBottom
    },
    messageImage: {
      width: "100%", // Fotoğrafın genişliğini doldur
      height: 200, // Sabit bir yükseklik belirle
      borderRadius: 10, // Fotoğrafın köşelerini yuvarla
      marginTop: 10, // Yazı ile fotoğraf arasında boşluk bırak
    },
});

export default Message;
