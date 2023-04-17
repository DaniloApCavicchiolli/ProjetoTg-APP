import React, { useState, useEffect } from "react";
import { View, Text, Switch, Image, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";
import Toast from "react-native-toast-message";

import seuLogo from "../../../assets/seuLogo.png";
import { styles } from "./styles";
import { theme } from "../../global/themes";
import { useAuth } from "../../hooks/useAuth";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [validationErrors, setValidationErrors] = useState({});

  const { signIn, user } = useAuth();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  async function handleSignIn() {
    try {
      setValidationErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email obrigatório")
          .email("O email precisa ser válido"),
        password: Yup.string()
          .required("Senha obrigatória!")
          .min(8, "A senha precisa ter no mínimo 6 caracteres")
          .max(30, "O nome precisa ter no máximo 30 caracteres"),
      });

      const data = { email, password };

      await schema.validate(data, { abortEarly: false });

      signIn(data);
      if (user) {
        Toast.show({
          type: "success",
          text1: "Sucesso",
          text2: "Login realizado com sucesso!",
        });
        navigation.navigate("Perfil");
      }
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
        text2: "Não foi possível efetuar o login!",
      });
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
            error={!!validationErrors["email"]}
            onChangeText={(text) => setEmail(text)}
            style={styles.inputEmail}
          ></TextInput>

          <Text style={styles.textSenha}>Senha</Text>
          <TextInput
            mode="flat"
            name="senha"
            value={password}
            secureTextEntry={showPassword}
            textContentType="password"
            error={!!validationErrors["password"]}
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
              onPress={() => navigation.navigate("Cadastro")}
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
