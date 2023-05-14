import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import logoImage from "../../../assets/seuLogo.png";

export default Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <View style={styles.image}></View>
            <Text style={styles.textHeader}>
                {title}
            </Text>
            <Image source={logoImage} style={styles.image} />
        </View>
    )
}