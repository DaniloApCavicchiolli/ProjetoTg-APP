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
    filtrosContainer: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'yellow'
    },
    data: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '44%',
        height: 58,
        marginLeft: 14,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    status: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '44%',
        height: 58,
        marginRight: 14,
        borderRadius: 8,
        backgroundColor: '#fff',
    },

})