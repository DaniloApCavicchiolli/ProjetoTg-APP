import React, { createContext, useState, useCallback, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

import { api } from "../services/api";

export const AuthContext = createContext({
  user: {},
  userToken: {},
  loading: false,
  signIn({ email, senha }) { },
  signOut() { },
  updateUser() { },
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const [userToken, setUserToken] = useState('');
  const [loading, setLoading] = useState(true);

  /* Verifica se o usuário está logado e carrega seus dados */
  useEffect(() => {
    async function LoadStoragedData() {
      const [storagedUser, storagedToken] = await AsyncStorage.multiGet([
        "@RealCotacoes:user",
        "@RealCotacoes:token",
      ]);


      if (storagedToken[1] && storagedUser[1]) {
        api.defaults.headers.authorization = `Bearer ${storagedToken[1]}`;
        setUser(JSON.parse(storagedUser[1]));
      }

      setLoading(false);
    }
    LoadStoragedData();
  }, []);


  /* Função para logar */
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/auth", { email, password });
    api.defaults.headers.authorization = `Bearer ${response.data.token}`;
    setUser(response.data.user);
    setUserToken(response.data.token);

    try {
      await AsyncStorage.setItem(
        "@cotacoes:user",
        JSON.stringify(response.data.user)
      );
      await AsyncStorage.setItem(
        "@cotacoes:token",
        JSON.stringify(response.data.token)
      );
    } catch {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Erro",
        text2:
          "Não foi possível salvar alguma informação, tente relogar o app.",
      });
    }
    return response.data.user;
  }, []);

  /* Função para deslogar */
  const signOut = useCallback(async () => {
    try {
      await AsyncStorage.removeItem("@RealCotacoes:user");
      await AsyncStorage.removeItem("@RealCotacoes:token");

      setUser(undefined);
    } catch {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Erro",
        text2: "Não foi possível remover alguma informação."
      });
    }
  }, []);

  /* Função para editar dados do usuário */
  const updateUser = async (data) => {
    try {
      const response = await api.put(`/users/${user?.id}`, {
        name: data.name,
        email: data.email,
        telefone: data.telefone,
        cidade: data.cidade,
        endereco: data.endereco
      });
      if (response?.data !== null) {
        setUser(response?.data);
        await AsyncStorage.setItem(
          "@RealCotacoes:user",
          JSON.stringify(response?.data)
        );
        Toast.show({
          type: "success",
          position: "top",
          text1: "Success",
          text2: "Usuário atualizado com sucesso!."
        });
      }

    } catch (err) {
      console.log(err);
      Toast.show({
        type: "error",
        position: "top",
        text1: "Erro",
        text2: "Não foi possível atualizar os dados do usuário."
      });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        userToken,
        loading,
        signIn,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
