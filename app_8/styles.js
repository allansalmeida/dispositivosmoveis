import {StyleSheet} from 'react-native'




const styles = StyleSheet.create({
  titulo:{
    fontSize: 32,
    color:'blue',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
  },

    container:{
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#f0f0f0',
    width: 290,
    height:450,
    margin: 4,
    borderWidth: 5,
    marginBottom: 5
  },

  vagas:{
  fontFamily: "monospace",
  fontSize: 15,
  margin: 10,
  fontWeight: 'bold',
  },

    image:{
    
     width: 280,
    height: 190,
    marginBottom: 10,
  },

  titulovagas:{
  fontFamily: "monospace",
  fontSize: 15,
  marginBottom: 10,
  fontWeight: 'bold',
  textAlign: 'center',
  },
  
})






export {styles}