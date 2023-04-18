import { StyleSheet } from 'react-native'
import { theme } from '../../global/themes'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButton: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#00bfff'
    },
    header: {
        width: '100%',
        height: 40,
        marginTop: 42,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        // backgroundColor: 'yellow'
    },
    textHeader: {
        fontFamily: theme.fonts.Poppins700,
        fontSize: 20
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textNome: {
        width: '100%',
        paddingLeft: 25,
        fontSize: 15,
        paddingTop: 50,
        color: theme.colors.textLabel,
        fontFamily: theme.fonts.Poppins500,
    },
    inputUsuario: {
        width: 300,
        height: 34,
        backgroundColor: "transparent",
        fontFamily: theme.fonts.Poppins400,
    },
    textEmail: {
        width: '100%',
        paddingLeft: 25,
        fontSize: 15,
        paddingTop: 30,
        color: theme.colors.textLabel,
        fontFamily: theme.fonts.Poppins500,
    },
    inputEmail: {
        width: 300,
        height: 34,
        backgroundColor: "transparent",
        fontFamily: theme.fonts.Poppins400,
    },
    textTelefone: {
        width: '100%',
        paddingLeft: 25,
        fontSize: 15,
        paddingTop: 30,
        color: theme.colors.textLabel,
        fontFamily: theme.fonts.Poppins500,
    },
    inputTelefone: {
        width: 300,
        height: 34,
        backgroundColor: "transparent",
        fontFamily: theme.fonts.Poppins400,
    },
    textSenha: {
        width: '100%',
        paddingLeft: 25,
        fontSize: 15,
        paddingTop: 30,
        color: theme.colors.textLabel,
        fontFamily: theme.fonts.Poppins500,
    },
    inputSenha: {
        width: 300,
        height: 34,
        backgroundColor: "transparent",
        fontFamily: theme.fonts.Poppins400,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        margin: 8,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 12
    },
    buttonCriarConta: {
        width: 324,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        borderRadius: 8
    },
})