import React from "react";
import { View, ActivityIndicator, Platform } from "react-native";

import AuthRoutes from "./auth.routes";

import { useAuth } from "../hooks/useAuth";
import { theme } from "../global/themes";

export function Routes() {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator
          size={Platform.OS === "android" ? 100 : "large"}
          color={theme.colors.button}
        />
      </View>
    );
    
  return <AuthRoutes />;
}
