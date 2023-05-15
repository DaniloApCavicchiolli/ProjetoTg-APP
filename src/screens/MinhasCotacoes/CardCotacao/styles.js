import { StyleSheet } from 'react-native';
import { theme } from '../../../global/themes';

export const styles = StyleSheet.create({
    orcamentosContainer: {
        flex: 1,
        width: '100%',
        height: 327,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: '#e0e2df'
    },
    orcamentoContainerTitle: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    orcamentoTitle: {
        width: '95%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: theme.colors.button
    },
    orcamentoContainerProduto: {
        flex: 1,
        flexDirection: 'row',
        width: '85%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    orcamentoProduto: {
        width: '50%',
        height: '60%',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        // backgroundColor: 'yellow',
    },
    orcamentoUnidade: {
        width: '50%',
        height: '60%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        // backgroundColor: 'yellow',
    },
    orcamentoValor: {
        width: '60%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
    },
    orcamentoContainerStatus: {
        width: '70%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    orcamentoStatus: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#fff',
        // backgroundColor: '#add8e6',
    },
    orcamentoInformacoes: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: theme.colors.button,
    },
})
