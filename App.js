import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contexts/authContexts";
import Toast from "react-native-toast-message";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import {
  Kanit_400Regular,
  Kanit_500Medium,
  Kanit_600SemiBold,
  Kanit_700Bold,
} from "@expo-google-fonts/kanit"

import { Routes } from "./src/routes/index";

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Kanit_400Regular,
    Kanit_500Medium,
    Kanit_600SemiBold,
    Kanit_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />
  } else {
    return (
      <AuthProvider>
        <NavigationContainer>
          <Routes />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </AuthProvider>
    );
  }
}