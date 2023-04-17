import { StyleSheet } from 'react-native'
import { theme } from '../../global/themes'

export const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 114,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.button
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
        // backgroundColor: 'red'
    },
    categoryContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 22,
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
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: theme.colors.buttonTitle
    },
    textNome: {
        width: '90%',
        fontSize: 15,
        marginTop: 36,
        fontFamily: theme.fonts.title500Kanit,
    },
    inputNome: {
        width: '90%',
        height: 50,
        paddingLeft: 15,
        marginTop: 21,
        borderRadius: 8,
        fontFamily: theme.fonts.title400Poppins,
        borderWidth: 1,
        borderColor: "#EAEBEC"
    },
    textEmail: {
        width: '90%',
        fontSize: 15,
        marginTop: 36,
        fontFamily: theme.fonts.title500Kanit,
    },
    inputEmail: {
        width: '90%',
        height: 50,
        paddingLeft: 15,
        marginTop: 21,
        borderRadius: 8,
        fontFamily: theme.fonts.title400Poppins,
        borderWidth: 1,
        borderColor: "#EAEBEC"
    },
    textTelefone: {
        width: '90%',
        fontSize: 15,
        marginTop: 36,
        fontFamily: theme.fonts.title500Kanit,
    },
    inputTelefone: {
        width: '90%',
        height: 50,
        paddingLeft: 15,
        marginTop: 21,
        borderRadius: 8,
        // fontFamily: theme.fonts.title400Poppins,
        borderWidth: 1,
        borderColor: "#EAEBEC"
    },
    textCidade: {
        width: '90%',
        fontSize: 15,
        marginTop: 36,
        fontFamily: theme.fonts.title500Kanit,
    },
    inputCidade: {
        width: '90%',
        height: 50,
        paddingLeft: 15,
        marginTop: 21,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 8,
        fontFamily: theme.fonts.title400Poppins,
        borderWidth: 1,
        borderColor: "#EAEBEC"
    },
    textRegiao: {
        width: '90%',
        fontSize: 15,
        marginTop: 36,
        fontFamily: theme.fonts.title500Kanit,
    },
    inputRegiao: {
        width: '90%',
        height: 50,
        paddingLeft: 15,
        marginTop: 21,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 8,
        fontFamily: theme.fonts.title400Poppins,
        borderWidth: 1,
        borderColor: "#EAEBEC"
    },
    textSenha: {
        width: '90%',
        fontSize: 15,
        marginTop: 36,
        fontFamily: theme.fonts.title500Kanit,
    },
    viewSenha: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 21,
        paddingRight: 32,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#EAEBEC"
        // backgroundColor: 'red'
    },
    inputSenha: {
        width: '100%',
        height: 50,
        paddingLeft: 15,
        borderRadius: 8,
        fontFamily: theme.fonts.title400Poppins,
    },
    textCultura: {
        width: '90%',
        fontSize: 15,
        marginTop: 36,
        fontFamily: theme.fonts.title500Kanit,
    },
    inputCultura: {
        width: '90%',
        height: 50,
        paddingLeft: 15,
        marginTop: 21,
        marginBottom: 4,
        borderRadius: 8,
        fontFamily: theme.fonts.title400Poppins,
        borderWidth: 1,
        borderColor: "#EAEBEC"
    },
    textPlano: {
        width: '90%',
        fontSize: 15,
        marginTop: 36,
        fontFamily: theme.fonts.title500Kanit,
        // backgroundColor: 'yellow'
    },
    inputPlano: {
        width: '90%',
        height: 50,
        paddingLeft: 15,
        marginTop: 21,
        marginBottom: 4,
        borderRadius: 8,
        fontFamily: theme.fonts.title400Poppins,
        borderWidth: 1,
        borderColor: "#EAEBEC",
        backgroundColor: "#FFFFFF"
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 45,
    },
    buttonSalvar: {
        width: 324,
        height: 44,
        backgroundColor: theme.colors.secundary,
        borderRadius: 8
    },
    buttonLogout: {
        width: 324,
        height: 44,
        marginTop: 28,
        // marginBottom: 15,
        borderColor: theme.colors.button,
        borderRadius: 8,
    },
    containerDropDown: {
        display: 'flex',
        alignItems: 'center',
        width: '90%',
        // height: 50,
        // paddingLeft: 15,
        marginTop: 21,
        marginBottom: 4,
        // zIndex: 1000,
        // backgroundColor: 'yellow'
    },
    dropPiker: {
        flex: 1,
        width: '90%',
        // height: 40,
        // marginLeft: 2,
        // marginTop: 6,
        borderColor: "#EAEBEC",
        // backgroundColor: 'yellow'
    },

})