import React, { createContext, useState, useCallback, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

import { api } from "../services/api";

export const solicitacaoContext = createContext({
});

export function SolicitacaiProvider({ children }) {

    return (
        <solicitacaoContext.Provider
            value={{
            }}
        >
            {children}
        </solicitacaoContext.Provider>
    );
}