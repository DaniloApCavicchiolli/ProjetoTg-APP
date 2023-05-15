import { StyleSheet } from 'react-native';
import { theme } from '../../global/themes';

export const styles = StyleSheet.create({
    categoryContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 12,
    },
    buttonMeusOrcamentos: {
        width: 105,
        height: 98,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 14,
        borderRadius: 8,
    },
    viewText: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 15,
        fontFamily: theme.fonts.Poppins500,
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
});
