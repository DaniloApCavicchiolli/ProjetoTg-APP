import React, { useState, useEffect } from "react";
import { View, Text, Switch, Image, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import seuLogo from "../../../assets/seuLogo.png";
import { styles } from "./styles";
import { theme } from "../../global/themes";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  async function handleSignIn() {
    try {
      console.log("email", email);
      console.log("senha", senha);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={seuLogo} style={{ width: 190, height: 67 }} />
      </View>
      <KeyboardAwareScrollView style={{ flex: 1, width: '100%' }}>
        <View style={styles.inputContainer}>
          <Text style={styles.textEmail}>Email</Text>
          <TextInput
            mode="flat"
            name="login"
            value={email}
            keyboardType={"email-address"}
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCompleteType="email"
            // error={!!validationErrors["email"]}
            onChangeText={(text) => setEmail(text)}
            style={styles.inputEmail}
          ></TextInput>

          <Text style={styles.textSenha}>Senha</Text>
          <TextInput
            mode="flat"
            name="Senha"
            value={senha}
            secureTextEntry={showPassword}
            textContentType="password"
            // error={!!validationErrors["senha"]}
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
          <View style={styles.switchContainer}>
            <Switch
              trackColor={{ false: "#A7AFB7", true: "#FAD18A" }} // #F8AA27 #81b0ff
              thumbColor={isEnabled ? "#F8AA27" : "#f4f3f4"} // #00f #f4f3f4
              ios_backgroundColor="#A7AFB7"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.switch}
            />
            <Text style={styles.switchText}>Lembrar usuário</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={handleSignIn}
              mode="contained"
              style={styles.buttonEntrar}
              labelStyle={{
                fontFamily: theme.fonts.title700Kanit,
                color: theme.colors.buttonTitle,
              }}
            >
              Entrar
            </Button>
            <Button
              onPress={() => { }}
              mode="outlined"
              color={theme.colors.button}
              style={styles.buttonCadastro}
              labelStyle={{
                fontFamily: theme.fonts.title700Kanit,
                color: theme.colors.secundary,
              }}
            >
              Cadastrar-se
            </Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
