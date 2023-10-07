import { View, Text, Image } from 'react-native';



function App(){
    let nome = 'Mayara Nascimento Silva Nunes';
    let img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Female_Icon-2836559.png/220px-Female_Icon-2836559.png'

  return(
     <View>
        <Image
          source={{ uri: img }}
          style={{ marginTop: 50, width: 100, height: 100, alignSelf: 'center'}}
        />


        <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>Dados Pessoais:</Text>
        <Text> </Text>
        <Text style={{ fontSize: 20, marginLeft: 20, marginTop: -20}}>{nome}</Text>
        <Text style={{ fontSize: 20, marginLeft: 20}}>22/06/1995 - 28 anos</Text>
        <Text style={{ fontSize: 20, marginLeft: 20}}>Casada</Text>
        <Text style={{ fontSize: 20, marginLeft: 20}}>Praia Grande, SP</Text>

        <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>Formação:</Text>
        <Text> </Text>
        <Text style={{ fontSize: 20, marginLeft: 20, marginTop: -20}}>Graduada em Gestão Empresarial</Text>
        <Text style={{ fontSize: 20, marginLeft: 20, marginTop: -5}}>Fatec-PG (01/2014 - 12/2016)</Text>
        <Text style={{ fontSize: 20, marginLeft: 20}}>Cursando ADS</Text>
        <Text style={{ fontSize: 20, marginLeft: 20, marginTop: -5}}>Fatec-PG (07/2020 - 07/2024)</Text>


        <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>Experiência:</Text>
        <Text> </Text>
        <Text style={{ fontSize: 20, marginLeft: 20, marginTop: -20}}>Escola de Futebol Boca Juniors</Text>
        <Text style={{ fontSize: 20, marginLeft: 20, marginTop: -5}}>Coordenadora Administrativa</Text>
        <Text style={{ fontSize: 20, marginLeft: 20, marginTop: -5}}>05/2020 - Atual</Text>

        <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>Projetos:</Text>
        <Text> </Text>
        <Text style={{ fontSize: 20, marginLeft: 20, marginTop: -20}}>SAEI</Text>
        <Text style={{ fontSize: 20, marginLeft: 20, marginTop: -5}}>Sistema de Acompanhamento Escolar Infantil - Projeto Atual</Text>

        
      </View>
  )
}




export default App;