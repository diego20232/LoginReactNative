import React, { useState } from "react";
import { Button, IconButton, Text, TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar";


export default () => {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');

    // const [senha, setSenha] = useState('');
    // const [msglogin, setMsgLogin] = useState('');

    // const senhaUsuario = 'senha123';


    const clique = () => {
        if (!nome.trim()) {
            setMsg('insira seu nome de usúario');
            setTimeout(() => {
                setMsg('');
            }, 2000);
        } else if (senha !== 'senha123') {
            setMsg('senha Incorreta')
            setTimeout(() => {
                setMsg('');
            }, 2000);
        } else {
            setMsg(`Bem vindo ao sistema ${nome}`)
            setTimeout(() => {
                setMsg('');
            }, 4000);
        }


    }

    // const cliqueSenha = () => {
    //     if(no === senhaCorreta) {
    //         setMsgLogin(`Sucesso no login`)
    //     }else  
    //         setMsgLogin(`senha errada`)
    // };



    return (
        <View>
            <Text style={{ fontSize: 15, color: 'white', textAlign: 'center', padding: 5 }}>Digite seu nome de usúario</Text>
            <TextInput style={estilo.input} keyboardType="email-address" maxLength={50} onChangeText={text => setNome(text)} value={nome} placeholder="Exemplo: Diego Sampaio" />
            <Text style={{ fontSize: 15, color: 'white', textAlign: 'center', padding: 5 }}>Digite sua senha!</Text>
            <TextInput style={estilo.input} keyboardType="ascii-capable" secureTextEntry={true} maxLength={20} label="password" onChangeText={text => setSenha(text)} value={senha} />

            <Button icon={require('../assets/fonts/icon.png')} style={{
                width: 300,
                margin: 15,
                height: 40,
            }} mode="contained" buttonColor="#5F9EA0" textColor="white" onPress={clique} on>Entrar</Button>

            <Text style={{
                fontSize: 20,
                color: 'white',
                textAlign: 'center',
                fontWeight: "bold",
            }}>{msg}</Text>

            {/* <Button icon={require('../assets/fonts/saida.png')} style={{
                width: 300,
                margin: 13,
                height: 40,
                
            }} mode="contained" buttonColor="#5F9EA0" textColor="white" onPress={cliqueSenha}>Sair</Button>
            <Text style={{
                fontSize: 20,
                color: 'white',
                textAlign: 'center',
            }}>{msglogin}</Text> */}


        </View>
    )
}


const estilo = StyleSheet.create(
    {
        input: {
            borderCurve: 'circular',
            // borderRadius: 25,
            borderBottomWidth: 1,
        },
        padding: {
            padding: 10,
        }
    }
)