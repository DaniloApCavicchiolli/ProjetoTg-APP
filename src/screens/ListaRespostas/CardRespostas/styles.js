import { StyleSheet } from 'react-native';
import { theme } from '../../../global/themes';

export const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 55,
        marginTop: 42,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: theme.colors.background,
        // backgroundColor: 'yellow'
    },
    textHeader: {
        fontFamily: theme.fonts.title600Kanit,
        fontSize: 20
    },
    backButton: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#00bfff'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
        // backgroundColor: 'red'
    },
    produto: {
        // flex: 1,
        width: '95%',
        height: 74,
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    containerFiltros: {
        flexDirection: 'row',
        width: '95%',
        height: 78,
        marginBottom: 10,
        justifyContent: 'space-between',
        backgroundColor: theme.colors.background,
        // backgroundColor: 'yellow'
    },
    dataPedido: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%',
        height: 78,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    nRespostas: {
       alignItems: 'center',
       justifyContent: 'center',
       width: '48%',
       height: 78,
       borderRadius: 8,
       backgroundColor: '#fff',
    },
    containerFornecedores: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'yellow'
    },
    containerfornecedor: {
        width: '95%',
        height: 70,
        marginTop: 10,
        paddingLeft: 14,
        paddingRight: 14,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    containerTotal: {
        width: 130,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        // backgroundColor: '#90ee90'
    },
    total: {
        width: 100, 
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',     
        backgroundColor: 'transparent',
        // backgroundColor: '#add8e6' 
    },
})

