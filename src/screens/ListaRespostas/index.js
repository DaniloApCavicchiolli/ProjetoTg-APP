import React, { useState, useEffect } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import CardRespostas from "./CardRespostas";

import { styles } from "./styles";
import { theme } from "../../global/themes";

export default function ListaResposta() {
    const navigation = useNavigation();

    const cotacoes = [
        {
            id: 1,
            data: '24/08/2021',
            nome: 'Fornecedor 1',
            produto: "Produto 1",
            quantidade: "5 unidades",
            valor: 20.35
        },
        {
            id: 2,
            data: '24/08/2021',
            nome: 'Fornecedor 2',
            produto: "Produto 2",
            quantidade: "5 unidades",
            valor: 35.00
        },
        {
            id: 3,
            data: '24/08/2021',
            nome: 'Fornecedor 3',
            produto: "Produto 3",
            quantidade: "5 unidades",
            valor: 50.30
        },
        {
            id: 4,
            data: '24/08/2021',
            nome: 'Fornecedor 4',
            produto: "Produto 4",
            quantidade: "5 unidades",
            valor: 0
        },
        {
            id: 5,
            data: '24/08/2021',
            nome: 'Fornecedor 5',
            produto: "Produto 5",
            quantidade: "5 unidades",
            valor: null
        },
    ]

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title={'Produto 2'} icon={true} onPress={() => { navigation.navigate("MinhasCotacoes") }} />
            <View style={styles.container}>
                {/* <View styles={styles.title}>
                    <Text style={{ fontFamily: theme.fonts.Poppins700 }}>Produto 2</Text>
                </View> */}
                <View style={styles.filtrosContainer}>
                    <View style={styles.data}>
                        <Text style={{ fontFamily: theme.fonts.Poppins700 }}>
                            Data do pedido
                        </Text>
                        <Text style={{ fontFamily: theme.fonts.Poppins500, color: theme.colors.placeHolder }}>
                            {cotacoes[0].data}
                        </Text>
                    </View>
                    <View style={styles.status}>
                        <Text style={{ fontFamily: theme.fonts.Poppins700 }}>
                            Nº de Respostas
                        </Text>
                        <Text style={{ fontFamily: theme.fonts.Poppins500, color: theme.colors.placeHolder }}>
                            {cotacoes.length + ' respostas'}
                        </Text>
                    </View>
                </View>
                <FlatList data={cotacoes} style={{ flex: 1, width: '95%' }}
                    renderItem={({ item }) => {
                        return (
                            <CardRespostas item={item} />
                        )
                    }}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}