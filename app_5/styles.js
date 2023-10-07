import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#B0C4DE',
    padding: 1,
  },
  viewTitle:{
    padding: 30
  }, 
  subtitlePage: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -5,
  },
  imagem:{
    width: 300,
    height: 210,
    borderRadius: 5,
  },
  viewInput: {
    width: '70%',
    marginTop: 20,
  },
  titleInput: {
    color: '#fff',
    fontSize: 15,
    padding: 3,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#6495ED', 
    borderWidth: 1,
    borderRadius: 10,
    color: '#fff',
    padding: 8,
  },
  button:{
    marginTop: 20,
    backgroundColor: '#6495ED',
    padding: 16,
    borderRadius: 4,
  },
  text:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  resultado: {
    marginTop: 20,
    backgroundColor: '#6495ED',
    borderRadius: 10,
    padding: 8,
    width: 220
  },
  titleResult: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
  },
  textClassification: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textResult: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
})

export {styles};

