import { StyleSheet } from 'react-native'
import { theme } from '../../global/themes'

export const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        // backgroundColor: 'yellow'
    },
    container: {
        // display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
    },
    textEmail: {
        width: '100%',
        paddingLeft: 42,
        fontSize: 15,
        paddingTop: 40,
        color: theme.colors.textLabel,
        fontFamily: theme.fonts.Poppins500,
    },
    inputEmail: {
        width: 300,
        height: 34,
        color: theme.colors.subtitle,
        fontFamily: theme.fonts.title400Kanit,
        backgroundColor: "transparent"
    },
    textSenha: {
        width: '100%',
        paddingLeft: 42,
        paddingTop: 30,
        fontSize: 15,
        color: theme.colors.textLabel,
        fontFamily: theme.fonts.Poppins500,
    },
    inputSenha: {
        width: 300,
        height: 34,
        color: theme.colors.subtitle,
        fontFamily: theme.fonts.title400Kanit,
        backgroundColor: "transparent",
    },
    switchContainer: {
        width: '100%',
        height: 27.93,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20.47,
        paddingLeft: 32,
    },
    switch: {
        width: 46,
        height: 27.93,
        transform: [{ scaleX: 1 }, { scaleY: 1 }]
    },
    switchText: {
        paddingLeft: 12,
        fontSize: 15,
        color: theme.colors.veryDark,
        fontFamily: theme.fonts.Poppins500
    },

    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 30,
    },
    buttonEntrar: {
        width: 324,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: theme.colors.primary,
    },
    buttonCadastro: {
        width: 324,
        height: 44,
        marginTop: 15,
        // marginBottom: 15,
        borderColor: theme.colors.secundary,
        borderRadius: 8,
    },
    esqueceuSenhaContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        // backgroundColor: 'yellow'
    },
    esqueceuSenha: {
        fontSize: 15,
        color: theme.colors.veryDark,
        fontFamily: theme.fonts.title500Kanit
    },
    cliqueAqui: {
        fontSize: 15,
        color: theme.colors.button,
        fontFamily: theme.fonts.title500Kanit
    }
})