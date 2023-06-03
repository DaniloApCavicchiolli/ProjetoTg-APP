import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import HeaderCategory from "../../components/HeaderCategory";
import CardProduto from "./CardProduto";

import { styles } from "./styles";
import { theme } from "../../global/themes";

const SolicitarCotacao = () => {
    const [tela, setTela] = useState();
    const navigation = useNavigation();

    const dados = [
        {
            id: 1,
            nome: "Produto teste",
            quantidade: '5',
            marca: "Marca testanto marca",
            formaPagamento: "Pagamento",
        },
        {
            id: 2,
            nome: "Produto teste 2",
            quantidade: '10',
            marca: "Marca testanto marca",
            formaPagamento: "Pagamento",
        }
    ]

    const produtos = [
        {
            label: "Produto 1",
            value: "Produto 1"
        },
        {
            label: "Produto 2",
            value: "Produto 2"
        },
        {
            label: "Produto 3",
            value: "Produto 3"
        },
        {
            label: "Produto 4",
            value: "Produto 4"
        },
        {
            label: "Produto 5",
            value: "Produto 5"
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
                <FlatList data={dados} style={{ flex: 1, width: '95%' }}
                    renderItem={({ item }) => {
                        return (
                            <CardProduto item={item} produtos={produtos} />
                        )
                    }}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
                <TouchableOpacity style={styles.solicitarButtonEnviar} onPress={() => navigation.navigate('EnviarSolicitacao')}>
                    <Text style={styles.textButton}>
                        Enviar
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
};

export default SolicitarCotacao;