import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios' ? 
    'http://localhost:90' : 'http://192.168.0.16:90'

    function showError(err) {
        Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
    }

export { server, showError }