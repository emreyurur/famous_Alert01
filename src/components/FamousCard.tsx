import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

interface CategoryButtonProps {
    title: string;
    onPress: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <View style={styles.buttonContent}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "blue",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 100,
        marginVertical: 8,
    },
    buttonContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default CategoryButton;
