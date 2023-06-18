import React, { useState, useEffect } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";

import Header from "../../components/Header";
import CardRespostas from "./CardRespostas";

import { styles } from "./styles";
import { theme } from "../../global/themes";

export default function ListaResposta({ route }) {
    const navigation = useNavigation();
    const [cotacao, setCotacao] = useState(route?.params?.data);
    const [dataSolicitacao, setDataSolicitacao] = useState();
    const data = cotacao.createdAt;
    let numRespostas = cotacao.fk_cotacao?.length;

    const cotacoes = [];
    cotacao.fk_cotacao.forEach((item) => {
        return cotacoes.push({
            id: item.id,
            nomeFornecedor: item.fk_fornecedor.name,
            telefoneFornecedor: item.fk_fornecedor.telefone,
            enderecoFornecedor: item.fk_fornecedor.endereco,
            nomeProduto: cotacao.nome,
            marcaProduto: cotacao.marca,
            quantidadeProduto: cotacao.quantidade,
            formaPagamento: cotacao.forma_pagamento,
            dataResposta: item.created_at,
            valor: item.valor,
        })
    });

    useEffect(() => {
        if (route?.params?.data) {
            setCotacao(route?.params?.data)
        }
    }, [route]);

    useEffect(() => {
        if (data) {
            setDataSolicitacao(format(new Date(data), 'dd/MM/yyyy'))
        }
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title={cotacao.nome} icon={true} onPress={() => { navigation.navigate("MinhasCotacoes") }} />
            <View style={styles.container}>
                <View style={styles.filtrosContainer}>
                    <View style={styles.data}>
                        <Text style={{ fontFamily: theme.fonts.Poppins700 }}>
                            Data do pedido
                        </Text>
                        <Text style={{ fontFamily: theme.fonts.Poppins500, color: theme.colors.placeHolder }}>
                            {dataSolicitacao}
                        </Text>
                    </View>
                    <View style={styles.status}>
                        <Text style={{ fontFamily: theme.fonts.Poppins700 }}>
                            Nº de Respostas
                        </Text>
                        <Text style={{ fontFamily: theme.fonts.Poppins500, color: theme.colors.placeHolder }}>
                            {numRespostas + ' respostas'}
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