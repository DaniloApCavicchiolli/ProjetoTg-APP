import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { theme } from "../../../global/themes";

export default CardCotacao = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.cotacaoContainer}>
            <View style={styles.cotacaoContainerTitle}>
                <View style={styles.cotacaoTitle}>
                    <Text style={{ fontFamily: theme.fonts.Poppins700, color: '#fff', fontSize: 15 }}>
                        {item.produto}
                    </Text>
                </View>
            </View>
            <View style={styles.cotacaoContainerProduto}>
                <View style={styles.cotacaoProduto}>
                    <Text style={{ fontFamily: theme.fonts.Poppins700, fontSize: 15 }}>
                        Data Cotação
                    </Text>
                    <Text style={{ fontFamily: theme.fonts.Poppins500, fontSize: 15, color: theme.colors.buttonTitle }}>
                        {item.data}
                    </Text>
                </View>
                <View style={styles.cotacaoUnidade}>
                    <Text style={{ fontFamily: theme.fonts.Poppins700, fontSize: 15 }}>
                        Unidades(s)
                    </Text>
                    <Text style={{ fontFamily: theme.fonts.Poppins500, fontSize: 15, color: theme.colors.buttonTitle }}>
                        {item.quantidade}
                    </Text>
                </View>
            </View>
            <View style={styles.cotacaoValor}>
                <Text style={{ fontFamily: theme.fonts.Poppins700, fontSize: 15 }}>
                    Melhor valor
                </Text>
                <Text style={{ fontFamily: theme.fonts.Poppins500, fontSize: 25, color: theme.colors.buttonTitle }}>
                    {item.valor}
                </Text>
            </View>
            <View style={styles.cotacaoContainerStatus}>
                <View style={styles.cotacaoStatus}>
                    <Text style={{ fontFamily: theme.fonts.Poppins500, fontSize: 15 }}>
                        Status
                    </Text>
                    <Text style={{ fontFamily: theme.fonts.Poppins400, fontSize: 15, color: theme.colors.placeHolder }}>
                        {!item.valor ? 'Em analise...' : 'Respondido'}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate("ListaResposta") }}
                    style={styles.cotacaoInformacoes}>
                    <Text style={{ fontFamily: theme.fonts.Poppins500, fontSize: 15, color: "#fff" }}>
                        Informações
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}