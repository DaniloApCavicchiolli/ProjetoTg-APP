import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { theme } from "../../../global/themes";

export default CardCotacao = ({ item }) => {
    return (
        <View style={styles.orcamentosContainer}>
            <View style={styles.orcamentoContainerTitle}>
                <View style={styles.orcamentoTitle}>
                    <Text style={{ fontFamily: theme.fonts.title700Kanit, color: '#fff', fontSize: 15 }}>
                        {item.produto}
                    </Text>
                </View>
            </View>
            <View style={styles.orcamentoContainerProduto}>
                <View style={styles.orcamentoProduto}>
                    <Text style={{ fontFamily: theme.fonts.title700Kanit, fontSize: 15 }}>
                        Data Cotação
                    </Text>
                    <Text style={{ fontFamily: theme.fonts.title500Kanit, fontSize: 15, color: theme.colors.placeHolder }}>
                        {item.data}
                    </Text>
                </View>
                <View style={styles.orcamentoUnidade}>
                    <Text style={{ fontFamily: theme.fonts.title700Kanit, fontSize: 15 }}>
                        Unidades(s)
                    </Text>
                    <Text style={{ fontFamily: theme.fonts.title500Kanit, fontSize: 15, color: theme.colors.placeHolder }}>
                        {item.quantidade}
                    </Text>
                </View>
            </View>
            <View style={styles.orcamentoValor}>
                <Text style={{ fontFamily: theme.fonts.title500Poppins, fontSize: 15 }}>
                    Melhor valor
                </Text>
                <Text style={{ fontFamily: theme.fonts.title700Kanit, fontSize: 25, color: theme.colors.placeHolder }}>
                    {item.valor}
                </Text>
            </View>
            <View style={styles.orcamentoContainerStatus}>
                <View style={styles.orcamentoStatus}>
                    <Text style={{ fontFamily: theme.fonts.title500Kanit, fontSize: 15 }}>
                        Status
                    </Text>
                    <Text style={{ fontFamily: theme.fonts.title400Kanit, fontSize: 15, color: theme.colors.placeHolder }}>
                        {!item.valor ? 'Em analise...' : 'Respondido'}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => { }}
                    style={styles.orcamentoInformacoes}>
                    <Text style={{ fontFamily: theme.fonts.title500Kanit, fontSize: 15, color: "#fff" }}>
                        Informações
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}