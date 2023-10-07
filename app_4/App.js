import { useState } from 'react'
import { View, Text, Button, TextInput, Image } from 'react-native'
import {styles} from './styles'
import myImage from './assets/alcool.png'; // Mude aqui o nome da sua imagem


export default function App(){
  const [resultado, setResultado] = useState()
  const [precoEtanol, setPrecoEtanol] = useState(0.00)
  const [precoGasolina, setPrecoGasolina] = useState(0.00)
  const [aux, setAux] = useState('')


function melhorOpcao() {


  setResultado(precoEtanol/precoGasolina)

  if (resultado <= 0.7){
    setAux (<Text> Etanol é a melhor opção </Text>)
  }else if(resultado > 0.7){
    setAux (<Text> Gasolina é a melhor opção </Text>)
  }
}

  return(
    <View>
      
      <Text style={styles.titulo}>Etanol ou Gasolina ? {'\n'}</Text>
      
      <Image source={myImage} style={{ width: 150, height: 150, marginLeft: 140 }} />
    <Text>{'\n'}</Text>


      <TextInput
      style={styles.input}
      placeholder="Preço Etanol"
      onChangeText={setPrecoEtanol}
      />

      <TextInput
      style={styles.input}
      placeholder="Preço Gasolina"
      onChangeText={setPrecoGasolina}
      />


      <Button title='Calcular' color='blue' onPress={() => melhorOpcao(setPrecoEtanol,setPrecoGasolina)}/>
      
      <Text style={styles.resultado}>{aux}</Text>


    </View>
  )
  
}
