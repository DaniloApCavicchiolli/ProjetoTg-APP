import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

import { styles } from "./styles";
import { theme } from "../../../global/themes";

export default CardProduto = ({ item, produtos }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [items, setItems] = useState(produtos);

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
                    <Text style={styles.textItem}>
                        {item.marca}
                    </Text>
                </View>
                <View style={styles.containerQuantidade}>
                    <Text style={styles.textTitle}>
                        Quantidade
                    </Text>
                    <Text style={styles.textItem}>
                        {item.quantidade}
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.textButton}>
                    {item.id == 1 ?
                        <FontAwesome name="plus" size={24} color={"#fff"} />
                        :
                        <FontAwesome name="minus" size={24} color={"#fff"} />
                    }
                </Text>
            </TouchableOpacity>
        </View>
    )
}