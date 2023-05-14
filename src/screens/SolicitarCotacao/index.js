import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from "react-native";

import Header from "../../components/Header";
import HeaderCategory from "../../components/HeaderCategory";
import CardProduto from "./CardProduto";

import { styles } from "./styles";
import { theme } from "../../global/themes";

const SolicitarCotacao = () => {
    const [tela, setTela] = useState();

    const orcamentos = [
        {
            id: 1,
            nome: "Produto teste",
            quantidade: '5',
            marca: "Marca",
            formaPagamento: "Pagamento",
        },
        {
            id: 2,
            nome: "Produto teste 2",
            quantidade: '10',
            marca: "Marca",
            formaPagamento: "Pagamento",
        }
    ]

    useEffect(() => {
        setTela(2);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title='Solicitar Cotação' />
            <View style={styles.container}>
                <HeaderCategory tela={tela} />
                <View style={styles.title}>
                    <Text style={{ fontFamily: theme.fonts.Poppins700, fontSize: 18 }}>
                        Selecionar Produtos
                    </Text>
                </View>
                <FlatList data={orcamentos} style={{ flex: 1, width: '100%' }}
                    renderItem={({ item }) => {
                        return (
                            <CardProduto item={item} />
                        )
                    }}
                    keyExtractor={(item) => item.id.toString()}
                />
                <TouchableOpacity style={styles.solicitarButtonEnviar}>
                    <Text style={styles.textButton}>
                        Enviar
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
};

export default SolicitarCotacao;