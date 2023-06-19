import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import * as Yup from "yup";

import { api } from "../../services/api";

import seuLogo from "../../../assets/icon.png";
import { theme } from "../../global/themes";
import { styles } from "./styles";

export default function Cadastro({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true);
  const [validationErrors, setValidationErrors] = useState({});

  async function handleSaveRegister() {
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
        password: Yup.string()
          .required("Senha obrigatória!")
          .min(8, "A senha precisa ter no mínimo 6 caracteres")
          .max(20, "A senha precisa ter no máximo 20 caracteres"),
      });

      let data = { name, email, password, telefone };
      await schema.validate(data, { abortEarly: false });

      let response = await api.post("/users", data);

      if (response?.data?.status === 200) {
        Toast.show({
          type: "success",
          text1: "Sucesso",
          text2: "Cadastro realizado com sucesso!",
        });
      }

      navigation.navigate("Login");
    } catch (err) {
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
      console.log(err)
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "Não foi possível realizar o cadastro, tente novamente.",
      });
    }
  }

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="black" style={{ marginLeft: 20 }} />
        </TouchableOpacity>
        <Text style={styles.textHeader}> Cadastro </Text>
        <Image source={seuLogo} style={{ width: 45, height: 45, marginRight: 20 }} />
      </View>

      <View style={styles.container}>
        <KeyboardAwareScrollView style={{ flex: 1 }}>
          <View style={styles.inputContainer}>
            <Text style={styles.textNome}>Nome</Text>
            <TextInput
              mode="flat"
              name="usuario"
              value={name}
              textContentType="name"
              autoCapitalize="words"
              autoCompleteType="name"
              placeholder="Usuário"
              placeholderTextColor={theme.colors.placeHolder}
              error={!!validationErrors["name"]}
              onChangeText={(text) => setName(text)}
              style={styles.inputUsuario}
            ></TextInput>

            <Text style={styles.textEmail}>Email</Text>
            <TextInput
              mode="flat"
              name="email"
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCompleteType="email"
              placeholder="usuário@teste.com"
              placeholderTextColor={theme.colors.placeHolder}
              error={!!validationErrors["email"]}
              onChangeText={(text) => setEmail(text)}
              style={styles.inputEmail}
            ></TextInput>

            <Text style={styles.textTelefone}>Telefone</Text>
            <TextInput
              mode="flat"
              name="telefone"
              value={telefone}
              textContentType="telephoneNumber"
              keyboardType="phone-pad"
              autoCompleteType="tel"
              placeholder="(99) 99999-9999"
              placeholderTextColor={theme.colors.placeHolder}
              onChangeText={(text) => setTelefone(text)}
              style={styles.inputTelefone}
              render={(props) => (
                <TextInputMask
                  {...props}
                  type="cel-phone"
                  options={{ maskType: "BRL", withDDD: true, dddMask: "(99) " }}
                />
              )}
            ></TextInput>

            <Text style={styles.textSenha}>Senha</Text>
            <TextInput
              mode="flat"
              name="senha"
              value={password}
              error={!!validationErrors["senha"]}
              textContentType="password"
              secureTextEntry={showPassword}
              placeholder="Insira sua senha"
              placeholderTextColor={theme.colors.placeHolder}
              onChangeText={(text) => setPassword(text)}
              style={styles.inputSenha}
              right={
                <TextInput.Icon
                  onPress={() => setShowPassword(!showPassword)}
                  name={!showPassword ? "eye" : "eye-off"}
                  size={24}
                  color={theme.colors.placeHolder}
                />
              }
            ></TextInput>

            <View style={styles.buttonContainer}>
              <Button
                onPress={handleSaveRegister}
                mode="contained"
                style={styles.buttonCriarConta}
                labelStyle={{
                  fontFamily: theme.fonts.title600Poppins,
                  color: theme.colors.buttonTitle,
                  fontSize: 18
                }}
              >
                Criar uma conta
              </Button>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
}
