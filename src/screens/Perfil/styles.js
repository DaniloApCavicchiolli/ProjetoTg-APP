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
    dadosContainer: {
        width: '100%',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: theme.colors.buttonTitle
    },
    textLabel: {
        width: '90%',
        fontSize: 15,
        marginTop: 16,
        fontFamily: theme.fonts.Poppins500,
        color: theme.colors.textLabel,
    },
    input: {
        width: '90%',
        height: 50,
        paddingLeft: 15,
        borderRadius: 8,
        fontFamily: theme.fonts.Poppins400,
        borderWidth: 1,
        borderColor: "#EAEBEC"
    },
    inputError: {
        width: '90%',
        height: 50,
        paddingLeft: 15,
        borderRadius: 8,
        fontFamily: theme.fonts.Poppins400,
        borderWidth: 1,
        borderColor: theme.colors.error
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 45,
    },
    buttonSalvar: {
        width: 324,
        backgroundColor: theme.colors.primary,
        borderRadius: 8
    },
    buttonLogout: {
        width: 324,
        marginTop: 18,
        borderColor: theme.colors.button,
        borderRadius: 8,
    },
})