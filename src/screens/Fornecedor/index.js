import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { TextInputMask } from "react-native-masked-text";
import { useNavigation } from "@react-navigation/native";
import { format } from 'date-fns';

import { theme } from '../../global/themes';
import { styles } from './styles';

export default function Fornecedor({ route }) {
    const { data } = route.params;
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title={data.nomeFornecedor} icon={true} onPress={() => { navigation.navigate("ListaResposta") }} />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.containerInformacoes}>
                        <Text style={styles.title}>
                            Informações sobre a cotação
                        </Text>
                        <View style={styles.containerResposta}>
                            <View style={styles.produto}>
                                <Text style={styles.textTitle}>
                                    Nome do Produto
                                </Text>
                                <Text style={styles.textItem}>
                                    {data.nomeProduto}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.containerResposta}>
                            <View style={styles.marca}>
                                <Text style={styles.textTitle}>
                                    Marca do Produto
                                </Text>
                                <Text style={styles.textItem}>
                                    {data.marcaProduto}
                                </Text>
                            </View>
                            <View style={styles.unidade}>
                                <Text style={styles.textTitle}>
                                    Unidade(s)
                                </Text>
                                <Text style={styles.textItem}>
                                    {data.quantidadeProduto}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.containerResposta}>
                            <View style={styles.valor}>
                                <Text style={styles.textTitle}>
                                    Valor da cotagem
                                </Text>
                                <Text style={styles.textItem}>
                                    R$ {data.valor.toFixed(2)}
                                </Text>
                            </View>
                            <View style={styles.resposta}>
                                <Text style={styles.textTitle}>
                                    Resposta
                                </Text>
                                <Text style={styles.textItem}>
                                    {format(new Date(data.dataResposta), 'dd/MM/yyyy')}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerFormaPagamento}>
                        <View style={styles.pagamento}>
                            <Text style={styles.textTitle}>
                                Forma de pagamento solicitado
                            </Text>
                            <TextInput
                                placeholder={"À vista"}
                                placeholderTextColor={theme.colors.placeHolder}
                                nome="formaPagamento"
                                value={data.formaPagamento}
                                textContentType="name"
                                autoCapitalize="words"
                                autoCompleteType="name"
                                onChangeText={() => { }}
                                style={styles.inputPagamento}
                                editable={false}
                            ></TextInput>
                        </View>

                        <View style={styles.telefone}>
                            <Text style={styles.textTitle}>
                                Telefone
                            </Text>
                            <TextInputMask
                                mode="flat"
                                name="telefone"
                                placeholder="(99) 99999-9999"
                                placeholderTextColor={theme.colors.placeHolder}
                                value={data.telefoneFornecedor}
                                textContentType="telephoneNumber"
                                keyboardType="phone-pad"
                                autoCompleteType="tel"
                                onChangeText={() => { }}
                                style={styles.inputTelefone}
                                type="cel-phone"
                                options={{ maskType: "BRL", withDDD: true, dddMask: "(99) " }}
                                editable={false}
                            ></TextInputMask>
                        </View>

                        <View style={styles.endereco}>
                            <Text style={styles.textTitle}>
                                Endereço
                            </Text>
                            <TextInput
                                placeholder={"Endereço fornecedor"}
                                placeholderTextColor={theme.colors.placeHolder}
                                nome="endereco"
                                value={data.enderecoFornecedor}
                                autoCapitalize="words"
                                onChangeText={() => { }}
                                style={styles.inputEndereco}
                                editable={false}
                            ></TextInput>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}