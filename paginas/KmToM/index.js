import React, {useState} from "react";
import {ImageBackground, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';

import fundo from '../../assets/background_b.jpeg';

import BoxConversao from "../../componentes/BoxConversao";
import BoxResultado from "../../componentes/boxResultado";

export default function KmToM() {

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    }

    const [milhas, setMilhas] = useState(0);

    const converteKmToM = (quilometros) =>{
        const valorConvertido = quilometros / 1.60;

        setMilhas(valorConvertido.toFixed(1))
    }
    
    return(
     <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ImageBackground source={fundo} style={estilosKmToM.container} blurRadius={100}>
            
            <BoxConversao 
            deMedida='quilômetros'
            paraMedida='milhas' 
            label='Quilômetros'
            funcaoAlteraTexto={valorInput => converteKmToM(valorInput)}
             />
           
            <BoxResultado medidaFinal='Milhas' resultadoFinal={milhas}/>

        </ImageBackground>
    </TouchableWithoutFeedback>    
    )
}

const estilosKmToM = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})