import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView, Image, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";
import * as Yup from "yup";

import { styles } from "./styles";
import { theme } from "../../global/themes";
import { useAuth } from "../../hooks/useAuth";
import logoImage from "../../../assets/seuLogo.png";
import HeaderCategory from "../../components/HeaderCategory";

export default function Perfil({ navigation }) {

    const { user, signOut, updateUser } = useAuth();

    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const [telefone, setTelefone] = useState(user?.telefone);
    const [cidade, setCidade] = useState(user?.cidade);
    const [endereco, setEndereco] = useState(user?.endereco);

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
                    .min(3, "O nome da cidade precisa ter no mínimo 3 caracteres")
                    .max(30, "O nome da cidade precisa ter no máximo 30 caracteres"),
                endereco: Yup.string()
                    .required("Região obrigatório!")
                    .min(3, "O nome da região precisa ter no mínimo 3 caracteres")
                    .max(30, "O nome da região precisa ter no máximo 30 caracteres"),
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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Image source={logoImage} style={{ width: 175, height: 76 }} />
            </View>

            <View style={styles.container}>
                <HeaderCategory />
                <ScrollView style={{ flex: 1, width: '95%' }}>
                    <View style={styles.dadosContainer}>
                        <Text style={styles.textNome}>Nome</Text>
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
                            style={styles.inputNome}
                        ></TextInput>

                        <Text style={styles.textEmail}>E-mail</Text>
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
                            style={styles.inputEmail}
                        ></TextInput>

                        <Text style={styles.textTelefone}>Telefone</Text>
                        <TextInputMask
                            mode="flat"
                            name="telefone"
                            value={telefone}
                            textContentType="telephoneNumber"
                            keyboardType="phone-pad"
                            autoCompleteType="tel"
                            placeholder="(99) 99999-9999"
                            onChangeText={(text) => setTelefone(text)}
                            style={styles.inputTelefone}
                            type="cel-phone"
                            options={{ maskType: "BRL", withDDD: true, dddMask: "(99) " }}
                        ></TextInputMask>

                        <Text style={styles.textTelefone}>Cidade</Text>
                        <TextInput
                            placeholder={"Cidade"}
                            placeholderTextColor={theme.colors.placeHolder}
                            nome="cidade"
                            value={cidade}
                            autoCapitalize="words"
                            error={!!validationErrors["cidade"]}
                            onChangeText={(text) => setCidade(text)}
                            style={styles.inputNome}
                        />

                        <Text style={styles.textTelefone}>Endereço</Text>
                        <TextInput
                            placeholder={"Endereço"}
                            placeholderTextColor={theme.colors.placeHolder}
                            nome="endereco"
                            value={endereco}
                            autoCapitalize="words"
                            error={!!validationErrors["endereco"]}
                            onChangeText={(text) => setEndereco(text)}
                            style={styles.inputNome}
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
