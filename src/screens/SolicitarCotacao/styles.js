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
