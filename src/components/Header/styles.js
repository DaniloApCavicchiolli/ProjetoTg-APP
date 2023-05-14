import { StyleSheet } from "react-native";
import { theme } from "../../global/themes";

export const styles = StyleSheet.create({
    header: {
        height: 80,
        width: '100%',
        zIndex: 999,
        flexDirection: 'row',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: theme.colors.primary
    },
    textHeader: {
        marginTop: 21,
        fontFamily: theme.fonts.title500Kanit,
        fontSize: 20,
        color: "#FFFFFF",
    },
    image: {
        width: 40,
        height: 45,
        marginTop: 21
    }
});