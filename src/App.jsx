import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { Image, StyleSheet, Text, View } from 'react-native';
import Login from "./components/Login";


export default () => {
   const [nome, setNome] = useState('');



return (
    <View style={[style.centro, style.fundo]}>
        <Image source={require('./imagens/icons.png')}/>
        <Text style={style.texto}>Tela de Cadastro</Text>
        <Login/>
    </View>
)
}


const style = StyleSheet.create(
    {
        centro: {
            alignItems: 'center',
            padding: 50,
        },
        texto: {
            fontSize: 23,
            padding: 40,
            color: 'white',
            fontFamily: 'Arial Narrow',
        },
        fundo: {
            flex: 1,
            backgroundColor: '#2F4F4F',
        }
    }
)