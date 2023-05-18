import React, { useState, useEffect } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";

import HeaderCategory from "../../components/HeaderCategory";
import Header from "../../components/Header";
import CardCotacao from "./CardCotacao";

import { styles } from "./styles";
import { theme } from "../../global/themes";

export default function MinhasCotacoes() {
    const [tela, setTela] = useState();
    const cotacoes = [
        {
            id: 1,
            data: '24/08/2021',
            produto: "Produto 2",
            quantidade: "5 unidades",
            valor: "R$280.000,00"
        },
        {
            id: 2,
            data: '24/08/2021',
            produto: "Produto 5",
            quantidade: "5 unidades",
            valor: null
        }
    ]

    useEffect(() => {
        setTela(3);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title={'Minhas Cotações'} />
            <HeaderCategory tela={tela} />
            <View style={styles.container}>
                <View style={styles.filtrosContainer}>
                    <View style={styles.data}>
                        <Text style={{ fontFamily: theme.fonts.Poppins700 }}>
                            Data
                        </Text>
                        <Text style={{ fontFamily: theme.fonts.Poppins500, color: theme.colors.placeHolder }}>
                            {cotacoes[0].data}
                        </Text>
                    </View>
                    <View style={styles.status}>
                        <Text style={{ fontFamily: theme.fonts.Poppins700 }}>
                            Status
                        </Text>
                        <Text style={{ fontFamily: theme.fonts.Poppins500, color: theme.colors.placeHolder }}>
                            Respondido
                        </Text>
                    </View>
                </View>
                <FlatList data={cotacoes} style={{ flex: 1, width: '95%' }}
                    renderItem={({ item }) => {
                        return (
                            <CardCotacao item={item} />
                        )
                    }}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}