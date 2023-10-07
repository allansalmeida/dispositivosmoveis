import React, { useState } from 'react';
import { View, Text, Button, TextInput, Switch } from 'react-native';
import { styles } from './Styles';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [informacoes, setInformacoes] = useState('');
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState(''); // Correção: Use string em vez de número para representar o sexo
  const [escolaridade, setEscolaridade] = useState(''); // Correção: Use string em vez de número para representar a escolaridade
  const [limite, setLimite] = useState(0);
  const [status, setStatus] = useState('');

  const initialEscolaridade = [
    { id: '0', descricao: 'SELECIONE UMA ESCOLARIDADE' },
    { id: '1', descricao: 'Ensino Fundamental Incompleto' },
    { id: '2', descricao: 'Ensino Fundamental Completo' },
    { id: '3', descricao: 'Ensino Médio Incompleto' },
    { id: '4', descricao: 'Ensino Médio Completo' },
    { id: '5', descricao: 'Ensino Superior Incompleto' },
    { id: '6', descricao: 'Ensino Superior Completo' },
    { id: '7', descricao: 'Outros' },
  ];

  const escolaridadesItem = initialEscolaridade.map((valor) => (
    <Picker.Item key={valor.id} value={valor.descricao} label={valor.descricao} />
  ));

  const exibirInformacoes = () => {
    setInformacoes(
      `Nome: ${nome}\nIdade: ${idade}\nSexo: ${sexo}\nEscolaridade: ${escolaridade}\nLimite: R$ ${limite}\nBrasileiro: ${
        status ? 'Sim' : 'Não'
      }`
    );
  };

  return (
    <View>
      <Text style={styles.titulo}>Abertura de Conta{'\n'}</Text>
      <Text>{'\n'}</Text>

      <Text style={styles.tituloCorpo}>Nome:</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu Nome Completo"
        onChangeText={setNome}
      />
      <Text>{'\n'}</Text>

      <Text style={styles.tituloCorpo}>Idade:</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        onChangeText={setIdade}
      />
      <Text>{'\n'}</Text>

      <Text style={styles.tituloCorpo}>Sexo:</Text>
      <Picker
        selectedValue={sexo}
        onValueChange={(itemValue) => setSexo(itemValue)}
        style={styles.picker}>
        <Picker.Item key="1" value="" label="SELECIONE SEU SEXO" />
        <Picker.Item key="2" value="Feminino" label="Feminino" />
        <Picker.Item key="3" value="Masculino" label="Masculino" />
        <Picker.Item
          key="4"
          value="Prefiro não responder"
          label="Prefiro não responder"
        />
      </Picker>
      <Text>{'\n'}</Text>

      <Text style={styles.tituloCorpo}>Escolaridade:</Text>
      <Picker
        selectedValue={escolaridade}
        onValueChange={(itemValue) => setEscolaridade(itemValue)}
        style={styles.picker}>
        {escolaridadesItem}
      </Picker>
      <Text>{'\n'}</Text>

      <Text style={styles.tituloCorpo}>Limite:</Text>

      <Slider
        minimumValue={0}
        maximumValue={10000}
        value={limite}
        onValueChange={(valor) => setLimite(valor)}
        step={100}
      />
      <Text style={styles.textSlider}>
        R${limite}
        {'\n'}
        {'\n'}
      </Text>

      <Text style={styles.tituloCorpo}>Brasileiro:</Text>
      <Switch
        value={status}
        onValueChange={(valorSwitch) => setStatus(valorSwitch)}
      />
      <Text>{'\n'}</Text>
      <Button title="Salvar" color="blue" onPress={exibirInformacoes} />
      <Text>{'\n'}</Text>

      <Text style={styles.tituloDados}> Dados Informados: </Text>
      <Text style={styles.informacoes}>{informacoes}</Text>
    </View>
  );
}
