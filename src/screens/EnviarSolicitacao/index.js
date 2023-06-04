import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import DropDownPicker from "react-native-dropdown-picker";
import Toast from "react-native-toast-message";

import { useAuth } from "../../hooks/useAuth";
import Header from "../../components/Header";
import { styles } from "./styles";
import { api } from "../../services/api";

export default function EnviarSolicitacao({ route }) {
    const { user } = useAuth();
    const navigation = useNavigation();
    const [solicitacao, setSolicitacao] = useState();
    const date = format(new Date(), 'dd/MM/yyyy');

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'A vista', value: 'A vista' },
        { label: 'Cartão', value: 'Cartão' },
    ]);

    const registrarSolicitacao = async () => {
        try {
            const data = {
                forma_pagamento: value,
                user_id: user?.id,
                itens: solicitacao
            }
            if (value === null) {
                Toast.show({
                    type: "error",
                    text1: "Error",
                    text2: "Selecione uma forma de pagamento",
                })
                return false
            }
            const resp = await api.post("/solicitacao", data);
            if (resp.status === 200) {
                Toast.show({
                    type: "success",
                    text1: "Sucesso",
                    text2: "Solicitação realizada com sucesso!",
                });
                navigation.navigate('SolicitarCotacao');
            }
        } catch (err) {
            console.log(err);
            Toast.show({
                type: "error",
                text1: "Error",
                text2: "Não foi possível enviar o orçamento!",
            })
        }
    };

    useEffect(() => {
        if (route?.params?.data) {
            setSolicitacao(route?.params?.data.slice(1))
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
                    {date}
                </Text>
            </View>
            <ScrollView style={{ flex: 1, width: '100%' }}>
                <View style={styles.container}>
                    {solicitacao?.map((itens, index) => {
                        return (
                            <View key={index} style={styles.containerProdutoUnidades}>
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
            <DropDownPicker
                placeholder={'Forma de pagamento'}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={styles.dropPiker}
                containerStyle={{ width: '80%' }}
                textStyle={styles.textTitle}
                dropDownDirection={"TOP"}
            />
            <TouchableOpacity style={styles.buttonEnviar} onPress={() => registrarSolicitacao()}>
                <Text style={styles.textButton}>
                    Enviar
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}