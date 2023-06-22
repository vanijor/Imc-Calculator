import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContext: {
      width: '100%',
      height: '100%',
      bottom: 0,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      marginTop: 30,
    },
    form: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#1877f2',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    textButtonCalculator: {
        fontSize: 20,
        color: '#ffffff'
    },
    errorMessage: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    peso: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pesoNormal: {
        backgroundColor: '#84C7CD',
        fontWeight: 'bold',
        borderRadius: 50,
        padding: 2
    },
    pesoExcesso: {
        backgroundColor: '#995AB6',
        fontWeight: 'bold',
        borderRadius: 5,
        padding: 2
    },
    pesoObesidade: {
        backgroundColor: '#FCFE4E',
        fontWeight: 'bold',
        borderRadius: 50,
        padding: 2
    },
    pesoSuper: {
        backgroundColor: '#FF1A1A',
        fontWeight: 'bold',
        borderRadius: 50,
        padding: 5
    }
  });

export { styles };