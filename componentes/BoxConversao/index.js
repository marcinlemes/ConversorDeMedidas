import React from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function BoxConversao(props){
   
    return(
        <View style={estiloBoxLabel.boxLabel}>
                <Text style={estiloBoxLabel.tituloBox}>Conversor de {props.deMedida} para {props.paraMedida}</Text>

                <View style={estiloBoxLabel.areaInput}>
                    
                    <View style={estiloBoxLabel.containerLabel}>
                        <Text style={estiloBoxLabel.label}>{props.label}</Text>
                    </View>
                    <TextInput 
                    style={estiloBoxLabel.input} 
                    keyboardType='numeric'
                    onChangeText={props.funcaoAlteraTexto}
                    
                    />

                </View>
            </View>
    )
}

const estiloBoxLabel = StyleSheet.create({
    boxLabel: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        paddingVertical: 45,
        paddingHorizontal: 25,
        borderRadius: 15,
        width: '90%',
        marginBottom: 50,
    },

    tituloBox: {
        textAlign: 'center',
        marginBottom: 30,
        color: '#fff',
        fontSize: 20,
        fontWeight: '400',
    },

    areaInput:{
        flexDirection: 'row',
        justifyContent: 'center'
    },

    containerLabel: {
        backgroundColor: '#90ee90',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginRight: 15
    },

    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        width: '55%'
    },

})