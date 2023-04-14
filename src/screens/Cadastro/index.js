import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from "@expo/vector-icons";

import seuLogo from "../../../assets/seuLogo.png";
import { theme } from "../../global/themes";
import { styles } from "./styles";

export default function Cadastro({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [cidade, setcidade] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cultura, setCultura] = useState("");

  const [showPassword, setShowPassword] = useState(true);

  async function handleSaveRegister() {
    try {
      console.log('name', name);
      console.log('email', email);
      console.log('telefone', telefone);
      console.log('password', password);
    } catch (err) {

    }
  }

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="black" style={{ marginLeft: 20 }} />
        </TouchableOpacity>
        <Text style={styles.textHeader}> Cadastro </Text>
        <Image source={seuLogo} style={{ width: 40, height: 45, marginRight: 20 }} />
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
              // error={!!validationErrors["name"]}
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
              // error={!!validationErrors["email"]}
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
              // error={!!validationErrors["senha"]}
              textContentType="password"
              secureTextEntry={showPassword}
              placeholder="Insira sua senha"
              onChangeText={(text) => setSenha(text)}
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
                // disabled={isChecked === true ? false : true}
                style={styles.buttonCriarConta}
                labelStyle={{
                  fontFamily: theme.fonts.title700Kanit,
                  color: theme.colors.buttonTitle,
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
