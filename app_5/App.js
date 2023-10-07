import React, { useState } from 'react';
import { Text, View, Pressable, TextInput, Image } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [peso, setPeso] = useState('0');
  const [altura, setAltura] = useState('0');
  const [resultado, setResultado] = useState('');
  const [imc, setImc] = useState('');
  const [colorTxt, setColorTxt] = useState('');

    function calcular() {
      if (peso === '' || altura === '') {
        alert('Preencha os campos.')
          setResultado('Valores Insuficientes');
          setColorTxt('red');
          setImc('Nível IMC: 0');
      } else {
        const imcTemp = peso / (altura * altura);
        setImc('Nível IMC: ' + imcTemp.toFixed(1));

        if (imcTemp < 18.5) {
          setResultado('Abaixo do peso');
          setColorTxt('red');
        } else if (imcTemp <= 24.9) {
          setResultado('Peso Normal');
          setColorTxt('white');
        } else if (imcTemp <= 29.9) {
          setResultado('Sobrepeso');
          setColorTxt('red');
        } else if (imcTemp <= 34.9) {
          setResultado('Obesidade Grau 1');
          setColorTxt('red');
        } else if (imcTemp <= 39.9) {
          setResultado('Obesidade Grau 2');
          setColorTxt('red');
        } else if (imcTemp > 39.9) {
          setResultado('Obesidade Grau 3');
          setColorTxt('red');
        }
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.viewTitle}>
           <Text style={styles.subtitlePage}>CÁLCULO DO IMC</Text>
        </View>

        <Image style={styles.imagem} source={require('./img/tabela_imc.png')} />

        <View style={styles.viewInput}>
          <Text style={styles.titleInput}>Peso</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira seu peso"
            onChangeText={(text) => setPeso(text)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.viewInput}>
          <Text style={styles.titleInput}>Altura</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira sua altura"
            onChangeText={(text) => setAltura(text)}
            keyboardType="numeric"
          />
        </View>

        <Pressable style={styles.button} onPress={calcular}>
          <Text style={styles.text}>Verificar</Text>
        </Pressable>

        <View style={styles.resultado}>
          <Text style={styles.titleResult}>Classificação</Text>
          <Text style={[styles.textClassification, { color: colorTxt}]}>{resultado}</Text>
          <Text style={styles.textResult}>{imc}</Text>
        </View>
      </View>
    );
  }