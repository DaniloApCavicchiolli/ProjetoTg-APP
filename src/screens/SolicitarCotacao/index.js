import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { useFocusEffect } from '@react-navigation/native';

import Header from "../../components/Header";
import HeaderCategory from "../../components/HeaderCategory";
import DropDownPicker from "react-native-dropdown-picker";

import { styles } from "./styles";
import { theme } from "../../global/themes";
import { api } from "../../services/api";

const SolicitarCotacao = () => {
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [marca, setMarca] = useState();
    const [prodId, setProdId] = useState();
    const [quantidade, setQuantidade] = useState();
    const [solicitacoes, setSolicitacoes] = useState([{}]);

    useFocusEffect(useCallback(() => {
        setSolicitacoes([{}]);
        setQuantidade('');
        setValue('');
        setMarca('');
    }, []));
    const onClearPress = useCallback(() => {
        setQuantidade('');
        setValue('');
        setMarca('');
    }, []);

    const Produtos = async () => {
        try {
            const response = await api.get(`/produto_showAll`);
            if (response?.status === 200) {
                let prod = [];
                response.data?.map((item) => {
                    if (!prod.includes(item.nome)) {
                        prod.push(item.nome)
                    }
                });
                setItems(prod?.map(item => ({
                    label: item, value: item
                })));
                setProdutos(response.data);
            }
        } catch (err) {
            console.log(err);
            return;
        }
    };

    const AddCard = () => {
        if (quantidade && value) {
            solicitacoes.push({
                produto_id: prodId,
                nome: value,
                quantidade: quantidade,
                marca: marca,
            });
            setSolicitacoes([...solicitacoes]);
        } else {
            Toast.show({
                type: "error",
                position: "top",
                text1: "Erro",
                text2: "Selecionar produto e/ou adicionar quantidade",
            });
            return false;
        }
    };

    const RemoveCard = (index) => {
        solicitacoes.splice(index, 1)
        setSolicitacoes([...solicitacoes])
    };

    const handleEnviarSolicitacao = async (solicitacoes) => {
        try {
            if (value && quantidade) {
                navigation.navigate('EnviarSolicitacao', {
                    data: solicitacoes
                });
            }
        } catch {
            Toast.show({
                type: "error",
                position: "top",
                text1: "Erro",
                text2:
                    "Não foi possível salvar informações sobre produto",
            });
            return false;
        }
    };

    useEffect(() => {
        Produtos();
    }, []);

    useEffect(() => {
        if (produtos) {
            produtos.forEach((item) => {
                if (item.nome === value) {
                    setMarca(item.marca);
                    setProdId(item.id);
                }
            })
        }
    }, [value]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title='Solicitar Cotação' />
            <View style={styles.container}>
                <HeaderCategory tela={2} />
                <View style={styles.title}>
                    <Text style={{ fontFamily: theme.fonts.Poppins700, fontSize: 18 }}>
                        Selecionar Produtos
                    </Text>
                </View>
                <FlatList data={solicitacoes} style={{ flex: 1, width: '95%' }}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.cardContainer} key={index}>
                                {item.nome ?
                                    <View style={styles.containerProduto}>
                                        <Text style={styles.textTitle}>
                                            Produto
                                        </Text>
                                        <TextInput
                                            placeholder={"Produto"}
                                            value={item.nome}
                                            editable={false}
                                            style={styles.inputProd}>
                                        </TextInput>
                                    </View>
                                    :
                                    <DropDownPicker
                                        placeholder="Produtos"
                                        open={open}
                                        value={value}
                                        items={items}
                                        setOpen={setOpen}
                                        setValue={setValue}
                                        setItems={setItems}
                                        zIndex={1000}
                                        containerStyle={{ width: '70%', marginTop: 10 }}
                                        textStyle={styles.textTitle}
                                        listMode="MODAL"
                                        style={{ borderColor: theme.colors.primary }}
                                        modalTitle="Selecione o produto"
                                        modalProps={{
                                            animationType: 'slide',
                                        }}
                                        modalTitleStyle={{
                                            fontWeight: 'bold',
                                        }}
                                    />
                                }
                                <View style={styles.containerText}>
                                    <View style={styles.containerMarca}>
                                        <Text style={styles.textTitle}>
                                            Marca
                                        </Text>
                                        <TextInput
                                            placeholder={"Marca"}
                                            value={marca ? marca : item.marca}
                                            editable={false}
                                            style={[styles.textItem, styles.inputQuantiade]}>
                                        </TextInput>
                                    </View>
                                    <View style={styles.containerQuantidade}>
                                        <Text style={styles.textTitle}>
                                            Quantidade
                                        </Text>
                                        <TextInput
                                            placeholder={"Quantidade"}
                                            value={item.quantidade ? item.quantidade : quantidade}
                                            keyboardType="numeric"
                                            editable={item.quantidade ? false : true}
                                            onChangeText={(text) => setQuantidade(text)}
                                            style={[styles.textItem, styles.inputQuantiade]}>
                                        </TextInput>
                                    </View>
                                </View>
                                {index === 0 ?
                                    (<TouchableOpacity style={styles.cardButton} onPress={() => { AddCard(); onClearPress() }}>
                                        <Text style={styles.textButton}>
                                            {<FontAwesome name="plus" size={24} color={"#fff"} />}
                                        </Text>
                                    </TouchableOpacity>)
                                    :
                                    (<TouchableOpacity style={styles.cardButton} onPress={() => RemoveCard(index)}>
                                        <Text style={styles.textButton}>
                                            {<FontAwesome name="minus" size={24} color={"#fff"} />}
                                        </Text>
                                    </TouchableOpacity>)}
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
                <TouchableOpacity style={styles.solicitarButtonEnviar} onPress={() => {
                    solicitacoes.length >= 1 && AddCard();
                    handleEnviarSolicitacao(solicitacoes)
                }}>
                    <Text style={styles.textButton}>
                        Enviar
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
};

export default SolicitarCotacao;