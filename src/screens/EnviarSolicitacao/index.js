import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import { styles } from "./styles";

export default function EnviarSolicitacao({ route }) {
    const navigation = useNavigation();
    const [solicitacao, setSolicitacao] = useState();
    console.log('route', solicitacao);

    const produtos = [
        { id: 1, nome: 'Produto A', quantidade: '2' },
        { id: 3, nome: 'Produto B', quantidade: '4' },
        { id: 4, nome: 'Produto C', quantidade: '5' },
        { id: 5, nome: 'Produto D', quantidade: '6' },
        { id: 6, nome: 'Produto E', quantidade: '6' },
        { id: 7, nome: 'Produto F', quantidade: '9' },
        { id: 8, nome: 'Produto G', quantidade: '40' },
    ]

    useEffect(() => {
        if (route?.params?.data) {
            setSolicitacao(route?.params?.data)
        }
    }, [route]);
    return (
        <SafeAreaView style={styles.areaView}>
            <Header title={'Enviar Solicitação'} icon={true} onPress={() => navigation.navigate('SolicitarCotacao')} />
            <View style={styles.produto}>
                <Text style={styles.textData}>
                    Data
                </Text>
                <Text style={styles.text}>
                    XX-XX-XXXX
                </Text>
            </View>
            <ScrollView style={{ flex: 1, width: '100%' }}>
                <View style={styles.container}>
                    {produtos?.map((itens) => {
                        return (
                            <View key={itens.id} style={styles.containerProdutoUnidades}>
                                <View style={styles.containerProduto}>
                                    <Text style={styles.text}>
                                        {itens.nome}
                                    </Text>
                                    <Text style={styles.text}>
                                        {itens.quantidade}
                                    </Text>
                                </View>
                            </View>
                        )
                    })}

                </View>
            </ScrollView>
            <TouchableOpacity style={styles.buttonEnviar} onPress={() => navigation.navigate('Perfil')}>
                <Text style={styles.textButton}>
                    Enviar
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}