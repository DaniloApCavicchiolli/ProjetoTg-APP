import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

import { styles } from "./styles";
import { theme } from "../../../global/themes";

export default CardRespostas = ({ item }) => {
    const navigation = useNavigation();

    const handleInformacoes = async (item) => {
        if (item.valor !== null) {
            navigation.navigate('Fornecedor', {
                data: item
            })
        }
    };

    return (
        <View style={styles.containerFornecedores}>
            <TouchableOpacity onPress={() => { handleInformacoes(item) }} style={styles.containerfornecedor}>
                <Text style={{ fontFamily: theme.fonts.Poppins400, fontSize: 15, color: theme.colors.placeHolder }}>
                    {item.nome}
                </Text>
                {item.valor === null
                    ?
                    <View View style={styles.total}>
                        <Text style={{
                            fontFamily: theme.fonts.Poppins400, fontSize: 14,
                            color: theme.colors.secondary
                        }}>
                            Aguardando...
                        </Text>
                    </View>
                    :
                    <View style={styles.containerTotal}>
                        <View style={styles.total}>
                            <Text style={{ fontFamily: theme.fonts.Poppins500, fontSize: 15 }}>
                                Total
                            </Text>
                            <Text style={{
                                fontFamily: theme.fonts.Poppins400, fontSize: 15,
                                color: theme.colors.placeHolder
                            }}>
                                R$ {item.valor.toFixed(2)}
                            </Text>
                        </View>
                        <AntDesign name="rightcircle" size={24} color={theme.colors.secondary} />
                    </View>
                }
            </TouchableOpacity>
        </View>
    )
}