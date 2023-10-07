import { useState} from 'react'
import { View, Text, Button, Image} from 'react-native';
import {styles} from './styles'



export default function App(){
  const [randomNumber, setRandomNumber] = useState()
  let img = 'https://www.ludeka.com.br/image/cache/data/componentes/D-06/d6-26mm-branco-800x800.jpg';
  
  const gerarNumero = () => {
  const randomNumber = Math.floor(Math.random() * 11);
  setRandomNumber(randomNumber);
  };

  return(
        <View style={styles.fundo}>
        
        <Text style={styles.titulo}> "Jogo do número aleatório" </Text>
        <br/>
        <Image source={{ uri: img }} style={{ width: 330, height: 260}}/>
        <br/>
        <Text style={styles.texto}> "Pense em um número de 0 a 10" </Text>
        <br/>
        <Text style={styles.numero} onChangeText={ (result) => this.setState({resultado:result}) }>
        <Text style={styles.resultado}>{randomNumber}</Text>
        <br/>
        <br/>
        <Button title="Descobrir" onPress={gerarNumero}/>
        <br/>
        
        </Text>

      </View>
  )
}

