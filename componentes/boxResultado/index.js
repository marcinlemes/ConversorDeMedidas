import React from "react";
import {View, Text, StyleSheet,} from 'react-native';

export default function BoxResultado(props) {
    return(
        <View style={estilosBoxResultado.container}>
            
            <Text style={estilosBoxResultado.resultado}>{props.resultadoFinal}</Text>
            <Text style={estilosBoxResultado.medida}>{props.medidaFinal}</Text>

        </View>
    )
}

const estilosBoxResultado = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 15,
        paddingVertical: 50,
        paddingHorizontal: 30,
        alignItems: 'center',
        width: '90%'
    },

    resultado: {
        fontSize: 100,
        color: '#fff',
        textShadowRadius: 4,
        fontWeight: 300
    },

    medida: {
        fontSize: 22,
        fontWeight: 300,
        color: '#fff'
    }

})