import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import Toast from "react-native-toast-message";

import { styles } from "./styles";
import { theme } from "../../../global/themes";
import { api } from "../../../services/api";

export default CardProduto = ({ item, index, solicitacoes, setSolicitacoes }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    // const [produtos, setProdutos] = useState([]);
    // const [marca, setMarca] = useState();
    // const [prodId, setProdId] = useState();
    // const [quantidade, setQuantidade] = useState();

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
                // setProdutos(response.data);
            }
        } catch (err) {
            console.log(err);
            return;
        }
    };

    // const AddCard = () => {
    //     if (quantidade && value) {
    //         solicitacoes.push({
    //             produto_id: prodId,
    //             nome: value,
    //             quantidade: quantidade,
    //             marca: marca,
    //         });
    //         setSolicitacoes([...solicitacoes]);
    //     } else {
    //         Toast.show({
    //             type: "error",
    //             position: "top",
    //             text1: "Erro",
    //             text2: "Selecionar produto e/ou adicionar quantidade",
    //         });
    //         return false;
    //     }
    // };

    // const RemoveCard = (index) => {
    //     solicitacoes.splice(index, 1)
    //     setSolicitacoes([...solicitacoes])
    // };

    useEffect(() => {
        Produtos();
    }, []);

    // useEffect(() => {
    //     if (produtos) {
    //         produtos.forEach((item) => {
    //             if (item.nome === value) {
    //                 setMarca(item.marca);
    //                 setProdId(item.id);
    //             }
    //         })
    //     }
    // }, [value]);

    return (
        <View style={styles.cardContainer}>
            <View style={styles.containerProduto}>
                <DropDownPicker
                    placeholder="Produtos"
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    zIndex={1000}
                    containerStyle={{ width: '70%' }}
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
            </View>
            <View style={styles.containerText}>
                <View style={styles.containerMarca}>
                    <Text style={styles.textTitle}>
                        Marca
                    </Text>
                    <TextInput
                        placeholder={"Marca"}
                        value={'marca'}
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
                        value={'5'}
                        keyboardType="numeric"
                        editable={false}
                        // onChangeText={(text) => setQuantidade(text)}
                        style={[styles.textItem, styles.inputQuantiade]}>
                    </TextInput>
                </View>
            </View>
            {index === 0 ?
                (<TouchableOpacity style={styles.cardButton} onPress={() => AddCard()}>
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
            {/* <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.textButton}>
                    {item.id == 1 ?
                        <FontAwesome name="plus" size={24} color={"#fff"} />
                        :
                        <FontAwesome name="minus" size={24} color={"#fff"} />
                    }
                </Text>
            </TouchableOpacity> */}
        </View>
    )
}