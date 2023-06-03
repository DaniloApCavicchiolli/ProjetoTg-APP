import { StyleSheet } from 'react-native'
import { theme } from '../../../global/themes'

export const styles = StyleSheet.create({
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
        flexDirection: 'row',
        width: '100%',
        height: 58,
        // marginBottom: 8,
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        // backgroundColor: theme.colors.button,
    },
    dropPiker: {
        // width: '100%',
        // height: 50,
        // marginLeft: 2
        // marginTop: 6,
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
    containerNome: {
        width: '60%',
        height: '80%',
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'green',
    },
    containerMarca: {
        width: '60%',
        height: '80%',
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        // backgroundColor: 'green',
    },
    containerQuantidade: {
        width: '40%',
        height: '80%',
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        zIndex: 1
        // backgroundColor: 'blue',
    },
    textTitle: {
        fontFamily: theme.fonts.Poppins700,
        fontSize: 14,
        // backgroundColor: 'yellow'
    },
    textItem: {
        fontFamily: theme.fonts.Poppins500,
        fontSize: 14,
        color: theme.colors.buttonTitle
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
    textButton: {
        fontFamily: theme.fonts.Poppins500,
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
