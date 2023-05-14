import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { styles } from "./styles";

export default CardProduto = ({ item }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.containerText}>
                <View style={styles.containerNome}>
                    <Text style={styles.textTitle}>
                        Nome
                    </Text>
                    <Text style={styles.textItem}>
                        {item.nome}
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
            <View style={styles.containerText}>
                <View style={styles.containerNome}>
                    <Text style={styles.textTitle}>
                        Marca
                    </Text>
                    <Text style={styles.textItem}>
                        {item.marca}
                    </Text>
                </View>
                <View style={styles.containerQuantidade}>
                    <Text style={styles.textTitle}>
                        Pagamento
                    </Text>
                    <Text style={styles.textItem}>
                        {item.formaPagamento}
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