import React, { useState, useEffect } from "react";
import { View, Text, TextInput, SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";
import * as Yup from "yup";
import Toast from "react-native-toast-message";

import HeaderCategory from "../../components/HeaderCategory";
import Header from "../../components/Header";

import { theme } from "../../global/themes";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./styles";

export default function Perfil() {

    const { user, signOut, updateUser } = useAuth();

    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const [telefone, setTelefone] = useState(user?.telefone);
    const [cidade, setCidade] = useState(user?.cidade);
    const [endereco, setEndereco] = useState(user?.endereco);
    const [tela, setTela] = useState();

    const [validationErrors, setValidationErrors] = useState({});

    async function handleUpdateUser() {
        try {
            setValidationErrors({});
            const schema = Yup.object().shape({
                name: Yup.string()
                    .required("Nome obrigatório!")
                    .min(3, "O nome precisa ter no mínimo 3 caracteres")
                    .max(30, "O nome precisa ter no máximo 30 caracteres"),
                email: Yup.string()
                    .required("Email obrigatório!")
                    .email("O email precisa ser válido!"),
                cidade: Yup.string()
                    .min(3, "A cidade precisa ter no mínimo 3 caracteres")
                    .max(30, "A cidade precisa ter no máximo 30 caracteres"),
                endereco: Yup.string()
                    .min(3, "O enderço precisa ter no mínimo 3 caracteres")
                    .max(30, "O endereço precisa ter no máximo 30 caracteres"),
            });

            let data = { name, email, telefone, cidade, endereco };
            await schema.validate(data, { abortEarly: false });

            updateUser(data);
        } catch (err) {
            console.log(err);
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach((error) => {
                    setValidationErrors((state) => {
                        return {
                            ...state,
                            [error.path || ""]: error.message,
                        };
                    });
                });

                return Toast.show({
                    type: "error",
                    text1: "Erro",
                    text2: err.inner[0].message,
                });
            }
        }
    }

    useEffect(() => {
        setTela(1);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title={"Perfil"} />
            <View style={styles.container}>
                <HeaderCategory tela={tela} />
                <ScrollView style={{ flex: 1, width: '95%' }}>
                    <View style={styles.dadosContainer}>
                        <Text style={styles.textLabel}>Nome</Text>
                        <TextInput
                            placeholder={"Novo Usuário"}
                            placeholderTextColor={theme.colors.placeHolder}
                            nome="name"
                            value={name}
                            textContentType="name"
                            autoCapitalize="words"
                            autoCompleteType="name"
                            error={!!validationErrors["name"]}
                            onChangeText={(text) => setName(text)}
                            style={[!!validationErrors["name"] ? styles.inputError : styles.input]}
                        />

                        <Text style={styles.textLabel}>E-mail</Text>
                        <TextInput
                            placeholder={"usuário@teste.com"}
                            placeholderTextColor={theme.colors.placeHolder}
                            nome="email"
                            value={email}
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            autoCapitalize="none"
                            autoCompleteType="email"
                            error={!!validationErrors["email"]}
                            onChangeText={(text) => setEmail(text)}
                            style={[!!validationErrors["email"] ? styles.inputError : styles.input]}
                        />

                        <Text style={styles.textLabel}>Telefone</Text>
                        <TextInputMask
                            mode="flat"
                            name="telefone"
                            value={telefone}
                            textContentType="telephoneNumber"
                            keyboardType="phone-pad"
                            autoCompleteType="tel"
                            placeholder="(99) 99999-9999"
                            onChangeText={(text) => setTelefone(text)}
                            style={[!!validationErrors["telefone"] ? styles.inputError : styles.input]}
                            type="cel-phone"
                            options={{ maskType: "BRL", withDDD: true, dddMask: "(99) " }}
                        />

                        <Text style={styles.textLabel}>Cidade</Text>
                        <TextInput
                            placeholder={"Cidade"}
                            placeholderTextColor={theme.colors.placeHolder}
                            nome="cidade"
                            value={cidade}
                            autoCapitalize="words"
                            error={!!validationErrors["cidade"]}
                            onChangeText={(text) => setCidade(text)}
                            style={[!!validationErrors["cidade"] ? styles.inputError : styles.input]}
                        />

                        <Text style={styles.textLabel}>Endereço</Text>
                        <TextInput
                            placeholder={"Endereço"}
                            placeholderTextColor={theme.colors.placeHolder}
                            nome="endereco"
                            value={endereco}
                            autoCapitalize="words"
                            error={!!validationErrors["endereco"]}
                            onChangeText={(text) => setEndereco(text)}
                            style={[!!validationErrors["endereco"] ? styles.inputError : styles.input]}
                        />

                        <View style={styles.buttonContainer}>
                            <Button
                                onPress={handleUpdateUser}
                                mode="contained"
                                style={styles.buttonSalvar}
                                labelStyle={{
                                    fontFamily: theme.fonts.Poppins600,
                                    color: theme.colors.buttonTitle,
                                    fontSize: 18
                                }}
                            >
                                Salvar
                            </Button>

                            <Button
                                onPress={signOut}
                                mode="outlined"
                                style={styles.buttonLogout}
                                labelStyle={{
                                    fontFamily: theme.fonts.Poppins600,
                                    color: theme.colors.secondary,
                                    fontSize: 18
                                }}
                            >
                                Logout
                            </Button>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
