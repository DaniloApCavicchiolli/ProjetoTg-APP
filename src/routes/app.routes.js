import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Perfil from '../screens/Perfil';
import SolicitarCotacao from '../screens/SolicitarCotacao';
import EnviarSolicitacao from '../screens/EnviarSolicitacao';
import MinhasCotacoes from '../screens/MinhasCotacoes';
import ListaResposta from '../screens/ListaRespostas';
import Fornecedor from '../screens/Fornecedor';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Perfil" component={Perfil} />
            <Stack.Screen name="SolicitarCotacao" component={SolicitarCotacao} />
            <Stack.Screen name="EnviarSolicitacao" component={EnviarSolicitacao} />
            <Stack.Screen name="MinhasCotacoes" component={MinhasCotacoes} />
            <Stack.Screen name="ListaResposta" component={ListaResposta} />
            <Stack.Screen name="Fornecedor" component={Fornecedor} />
        </Stack.Navigator>
    )
}