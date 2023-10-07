import { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import {styles} from './styles'




export default function App(){
  const [resultado, setResultado] = useState()
  const [numero1, setNumero1] = useState()
  const [numero2, setNumero2] = useState()


  return(
    <View style={styles.fundo}>
      <Text style={styles.titulo}>Multiplicador de Números</Text>


      <TextInput
      style={styles.input}
      placeholder="Digite o primeiro número"
      onChangeText={setNumero1}
      />


      <TextInput
      style={styles.input}
      placeholder="Digite o segundo número"
      onChangeText={setNumero2}
            />


      <Button title='Calcular' color='blue' onPress={() => setResultado(numero1 * numero2)}/>


      <Text style={styles.resultado}>{resultado}</Text>








    </View>
  )
}

