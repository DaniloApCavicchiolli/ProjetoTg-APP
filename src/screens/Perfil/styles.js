import { StyleSheet } from 'react-native'
import { theme } from '../../global/themes'

export const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
    },
    categoryContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 12,
    },
    viewText: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 15,
        fontFamily: theme.fonts.title500Kanit,
    },
    buttonMeusOrcamentos: {
        width: 105,
        height: 98,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 14,
        borderRadius: 8,
    },
    buttonSolicitarOrcamentos: {
        width: 105,
        height: 98,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    buttonPerfil: {
        width: 105,
        height: 98,
        marginRight: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    dadosContainer: {
        width: '100%',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: theme.colors.buttonTitle
    },
    textNome: {
        width: '90%',
        fontSize: 15,
        marginTop: 36,
        fontFamily: theme.fonts.Poppins500,
        color: theme.colors.textLabel,
    },
    inputNome: {
        width: '90%',
        height: 50,
        paddingLeft: 15,
        marginTop: 21,
        borderRadius: 8,
        fontFamily: theme.fonts.Poppins400,
        borderWidth: 1,
        borderColor: "#EAEBEC"
    },
    textEmail: {
        width: '90%',
        fontSize: 15,
        marginTop: 36,
        fontFamily: theme.fonts.Poppins500,
        color: theme.colors.textLabel,
    },
    inputEmail: {
        width: '90%',
        height: 50,
        paddingLeft: 15,
        marginTop: 21,
        borderRadius: 8,
        fontFamily: theme.fonts.Poppins400,
        borderWidth: 1,
        borderColor: "#EAEBEC"
    },
    textTelefone: {
        width: '90%',
        fontSize: 15,
        marginTop: 36,
        fontFamily: theme.fonts.Poppins500,
        color: theme.colors.textLabel,
    },
    inputTelefone: {
        width: '90%',
        height: 50,
        paddingLeft: 15,
        marginTop: 21,
        borderRadius: 8,
        fontFamily: theme.fonts.Poppins400,
        borderWidth: 1,
        borderColor: "#EAEBEC"
    },
    textCidade: {
        width: '90%',
        fontSize: 15,
        marginTop: 36,
        fontFamily: theme.fonts.Poppins500,
        color: theme.colors.textLabel,
    },
    inputCidade: {
        width: '90%',
        height: 50,
        paddingLeft: 15,
        marginTop: 21,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 8,
        fontFamily: theme.fonts.Poppins400,
        borderWidth: 1,
        borderColor: "#EAEBEC"
    },
    textEndereco: {
        width: '90%',
        fontSize: 15,
        marginTop: 36,
        fontFamily: theme.fonts.Poppins500,
        color: theme.colors.textLabel,
    },
    inputEndereco: {
        width: '90%',
        height: 50,
        paddingLeft: 15,
        marginTop: 21,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 8,
        fontFamily: theme.fonts.Poppins400,
        borderWidth: 1,
        borderColor: "#EAEBEC"
    },
    
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 45,
    },
    buttonSalvar: {
        width: 324,
        height: 44,
        backgroundColor: theme.colors.primary,
        borderRadius: 8
    },
    buttonLogout: {
        width: 324,
        height: 44,
        marginTop: 28,
        borderColor: theme.colors.button,
        borderRadius: 8,
    },
})