import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome, Feather, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

export default HeaderCategory = ({ tela }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.categoryContainer}>
            <TouchableOpacity
                style={[
                    styles.buttonMeusOrcamentos,
                    { backgroundColor: tela === 3 ? "#7a9186" : "#FFF" },
                ]}
                onPress={() => { setTela(3) }}
            >
                <FontAwesome
                    name="dollar"
                    size={24}
                    color={tela === 3 ? "#EAEBEC" : "#77838F"}
                />
                <Text
                    style={[
                        styles.viewText,
                        { color: tela === 3 ? "#EAEBEC" : "#77838F" },
                    ]}
                >
                    {" "}
                    Minhas {"\n"} Solicitações
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.buttonSolicitarOrcamentos,
                    { backgroundColor: tela === 2 ? "#7a9186" : "#FFFFFF" },
                ]}
                onPress={() => { navigation.navigate('SolicitarCotacao') }}
            >
                <FontAwesome5
                    name="house-user"
                    size={24}
                    color={tela === 2 ? "#EAEBEC" : "#77838F"}
                />
                <Text
                    style={[
                        styles.viewText,
                        { color: tela === 2 ? "#EAEBEC" : "#77838F" },
                    ]}
                >
                    {" "}
                    Solicitar {"\n"} Cotação
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.buttonPerfil,
                    { backgroundColor: tela === 1 ? "#7a9186" : "#FFFFFF" },
                ]}
                onPress={() => { navigation.navigate("Perfil") }}
            >
                <Feather
                    name="user"
                    size={24}
                    color={tela === 1 ? "#EAEBEC" : "#77838F"}
                />
                <Text
                    style={[
                        styles.viewText,
                        { color: tela === 1 ? "#EAEBEC" : "#77838F" },
                    ]}
                >
                    {" "}
                    Perfil
                </Text>
            </TouchableOpacity>
        </View>
    )
}