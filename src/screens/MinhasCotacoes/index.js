import React, { useState, useEffect } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";

import HeaderCategory from "../../components/HeaderCategory";
import Header from "../../components/Header";
import CardCotacao from "./CardCotacao";
import { useAuth } from "../../hooks/useAuth";

import { styles } from "./styles";
import { theme } from "../../global/themes";
import { api } from "../../services/api";

export default function MinhasCotacoes() {
    const { user } = useAuth();
    // const [cotacoes, setCotacoes] = useState();
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

    // const loadSolicitacoes = async () => {
    //     try {
    //         const response = await api.get(`/solicitacao/${user.id}`);
    //         if (response?.status === 200) {
    //             setCotacoes(response.data);
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // useEffect(() => {
    //     loadSolicitacoes();
    // }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title={'Minhas Cotações'} />
            <HeaderCategory tela={3} />
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