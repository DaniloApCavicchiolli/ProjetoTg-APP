import { StyleSheet } from 'react-native'
import { theme } from '../../global/themes'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
        // backgroundColor: 'red'
    },
    cardContainer: {
        flex: 1,
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: theme.colors.secondary
        // backgroundColor: '#e0e2df'
    },
    containerProduto: {
        flexDirection: 'column',
        width: '100%',
        height: 58,
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        // backgroundColor: theme.colors.button,
    },
    containerText: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 6,
        justifyContent: 'space-around',
        // backgroundColor: 'yellow'
    },
    containerMarca: {
        width: '60%',
        height: '80%',
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        // backgroundColor: 'green',
    },
    textTitle: {
        fontFamily: theme.fonts.Poppins700,
        fontSize: 16,
        // backgroundColor: 'yellow'
    },
    textItem: {
        fontFamily: theme.fonts.Poppins500,
        fontSize: 14,
        color: theme.colors.buttonTitle
    },
    inputProd: {
        width: '100%',
        height: 40,
        textAlign: 'center',
        fontFamily: theme.fonts.Poppins500,
        fontSize: 14,
        color: theme.colors.buttonTitle
        // backgroundColor: 'red'
    },
    inputQuantiade: {
        width: '100%',
        height: 40,
        // backgroundColor: 'red'
    },
    containerQuantidade: {
        width: '40%',
        height: '80%',
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        zIndex: 1,
        // backgroundColor: 'blue',
    },
    cardButton: {
        width: '90%',
        height: 54,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: theme.colors.primary,
    },
    title: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontFamily: theme.fonts.Poppins700,
        fontSize: 14,
        color: theme.colors.buttonTitle
    },
    solicitarButtonEnviar: {
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
