import { StyleSheet } from 'react-native';
import { theme } from '../../../global/themes';

export const styles = StyleSheet.create({
    cotacaoContainer: {
        flex: 1,
        width: '100%',
        height: 327,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: theme.colors.secondary
    },
    cotacaoContainerTitle: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    cotacaoTitle: {
        width: '95%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: theme.colors.primary
    },
    cotacaoContainerProduto: {
        flex: 1,
        flexDirection: 'row',
        width: '85%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cotacaoProduto: {
        width: '50%',
        height: '60%',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        // backgroundColor: 'yellow',
    },
    cotacaoUnidade: {
        width: '50%',
        height: '60%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        // backgroundColor: 'yellow',
    },
    cotacaoValor: {
        width: '60%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
    },
    cotacaoContainerStatus: {
        width: '70%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    cotacaoStatus: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#fff',
        // backgroundColor: '#add8e6',
    },
    cotacaoInformacoes: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: theme.colors.primary,
    },
})
