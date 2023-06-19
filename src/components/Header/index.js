import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { styles } from "./styles";
import logoImage from "../../../assets/icon4.png";

export default Header = ({ title, icon, onPress }) => {

    return (
        <View style={styles.header}>
            <View style={styles.icon}>
                <TouchableOpacity onPress={onPress}>
                    {icon && <AntDesign name="arrowleft" size={24} color="white" />}
                </TouchableOpacity>
            </View>
            <Text style={styles.textHeader}>
                {title}
            </Text>
            <Image source={logoImage} style={styles.image} />
        </View>
    )
}