import React, { useState } from 'react';
import { 
        View, 
        Text, 
        TextInput, 
        TouchableOpacity,
        Vibration,
        Pressable,
        Keyboard
        } from 'react-native';
import ResultIMC from './ResultIMC/';
import { styles } from './style/'

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha o peso e a altura!')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [errorMessage, setErrorMessage] = useState(null)

    function imcCalculator() {
        let heightFormat = height.replace(",",".")
        return setImc((weight/(heightFormat * heightFormat)).toFixed(2))
    }

    function verificationImc() {
        if (imc === null) {
            Vibration.vibrate()
            setErrorMessage("Campo Obrigatório*")
        }
    }

    function validationImc(){
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setTextButton('Calcular Novamente?')
            setMessageImc('Seu IMC é igual:')
            setErrorMessage(null)
        } else {
            verificationImc()
            setImc(null)
            setTextButton('Calcular')
            setMessageImc('Preencha o peso e a altura!')
        }
    }
    
    return(
        <Pressable
            onPress={Keyboard.dismiss}
            style={styles.formContext}
        >
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Ex. 1.75'
                    keyboardType='numeric'
                    style={styles.input}
                />
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder='Ex. 75.365'
                    keyboardType='numeric'
                    style={styles.input}
                />
                <TouchableOpacity
                    onPress={()=>validationImc()}
                    style={styles.buttonCalculator}
                    >
                    <Text 
                        style={styles.textButtonCalculator} 
                        onPress={Keyboard.dismiss}
                    >{textButton}</Text>
                </TouchableOpacity>
                <ResultIMC messageResultImc={messageImc} resultImc={imc}/>

                <View style={styles.peso}>
                    {imc >= 20 && imc < 25 ? 
                    <Text style={styles.pesoNormal}>Peso Normal IMC entre 20~24</Text>
                    :  ''  }
                    {imc >= 25 && imc < 30 ? 
                    <Text style={styles.pesoExcesso}>Excesso de Peso IMC entre 25~29</Text>
                    :  ''  }
                    {imc >= 30 && imc < 36 ? 
                    <Text style={styles.pesoObesidade}>Obesidade IMC entre 30~35</Text>
                    :  ''  }
                    {imc > 35 ? 
                    <Text style={styles.pesoSuper}>Super Obesidade IMC entre 30~35</Text>
                    :  ''  }
                </View>
            </View>
        </Pressable>
    );
}