import React, {useState} from "react";
import {ImageBackground, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';

import fundo from '../../assets/background.jpg';

import BoxConversao from "../../componentes/BoxConversao";
import BoxResultado from "../../componentes/boxResultado";

export default function MToKm() {

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    const [quilometros, setQuilometros] = useState(0);

    const converteMToKm = (milhas) => {
        const valorConvertido = milhas * 1.60;

        setQuilometros(valorConvertido.toFixed(1))
    }

    return(
    <TouchableWithoutFeedback onPress={dismissKeyboard}> 
        <ImageBackground source={fundo} style={estilosMToKm.container} blurRadius={100}>
            
            <BoxConversao
            deMedida='milhas' 
            paraMedida='quilômetros' 
            label='Milhas'
            funcaoAlteraTexto={valorInput => converteMToKm(valorInput)}
            
            />

            <BoxResultado medidaFinal='Quilômetros' resultadoFinal={quilometros}/>

        </ImageBackground>
    </TouchableWithoutFeedback>    
    )
}

const estilosMToKm = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})