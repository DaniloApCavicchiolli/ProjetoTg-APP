import { StyleSheet } from 'react-native'
import { theme } from '../../global/themes'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: theme.colors.background,
    },
    containerInformacoes: {
        width: '95%',
        height: 280,
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 5,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 16,
        fontFamily: theme.fonts.Poppins700,
        color: theme.colors.placeHolder,
        marginTop: 21,
        // backgroundColor: '#add8e6',
    },
    containerResposta: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 12,
        paddingLeft: 14,
        paddingRight: 14,
        // backgroundColor: '#add8e6',
    },
    textTitle: {
        fontFamily: theme.fonts.Poppins500,
        fontSize: 15
    },
    textItem: {
        fontFamily: theme.fonts.Poppins400,
        fontSize: 14,
        color: theme.colors.placeHolder
    },
    produto: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        // backgroundColor: '#F8AA27'
    },
    marca: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        // backgroundColor: '#27F8AA'
    },
    unidade: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        // backgroundColor: '#27F8AA'
    },
    valor: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        // backgroundColor: '#F8AA27'
    },
    resposta: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        // backgroundColor: '#27F8AA'
    },
    containerFormaPagamento: {
        width: '100%',
        alignItems: 'center',
        // backgroundColor: 'yellow',
    },
    pagamento: {
        width: '95%',
        marginTop: 10,
        // backgroundColor: '#add8e6',
    },
    inputPagamento: {
        width: '100%',
        height: 45,
        paddingLeft: 15,
        marginTop: 10,
        borderRadius: 8,
        fontSize: 15,
        fontFamily: theme.fonts.title400Kanit,
        color: theme.colors.placeHolder,
        borderWidth: 1,
        borderColor: "#EAEBEC",
        backgroundColor: '#fff'
    },
    telefone: {
        width: '95%',
        marginTop: 10,
        // backgroundColor: '#add8e6',
    },
    inputTelefone: {
        width: '100%',
        height: 45,
        paddingLeft: 15,
        marginTop: 10,
        borderRadius: 8,
        fontSize: 15,
        fontFamily: theme.fonts.title400Kanit,
        color: theme.colors.placeHolder,
        borderWidth: 1,
        borderColor: "#EAEBEC",
        backgroundColor: '#fff'
    },
    endereco: {
        width: '95%',
        marginTop: 10,
        marginBottom: 10,
        // backgroundColor: '#add8e6',
    },
    inputEndereco: {
        width: '100%',
        height: 50,
        paddingLeft: 15,
        marginTop: 10,
        borderRadius: 8,
        fontSize: 15,
        fontFamily: theme.fonts.title400Kanit,
        color: theme.colors.placeHolder,
        borderWidth: 1,
        borderColor: "#EAEBEC",
        backgroundColor: '#fff'
    },
})