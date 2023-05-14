import { StyleSheet } from 'react-native';
import { theme } from '../../global/themes';

export const styles = StyleSheet.create({
    areaView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.secondary
    },
    produto: {
        width: '50%',
        height: 54,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
    },
    text: {
        fontFamily: theme.fonts.Poppins400,
        color: theme.colors.placeHolder
    },
    textData: {
        fontFamily: theme.fonts.Poppins500
    },
    containerProdutoUnidades: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    containerProduto: {
        width: '80%',
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: '#fff',
    },
    textButton: {
        fontFamily: theme.fonts.Poppins700,
        fontSize: 18,
        color: theme.colors.buttonTitle
    },
    buttonEnviar: {
        width: '95%',
        height: 54,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: theme.colors.primary,
    },

})