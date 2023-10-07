import React, { Component } from 'react';
import { View, Text, ScrollView, Image} from 'react-native'
import {styles} from './styles'

function App(){
  let Img1 = 'https://assets-blog.hostgator.com.br/wp-content/uploads/2018/07/logica-de-programacao-scaled-1-768x591.webp';
  let Img2 = 'https://coodesh.com/blog/wp-content/uploads/2022/03/quanto-ganha-desenvolvedor-front-end-1536x864.jpg';
  let Img3 = 'https://www.monitoratec.com.br/blog/wp-content/uploads/2016/03/163370-estender-500-5-desafios-no-desenvolvimento-mobile-1024x575.jpg';

  return(
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titulo}> Vagas </Text>
        
        <View style={styles.container}>
           <Text style={styles.titulovagas} >Back-end Pleno</Text>
           <Image style={styles.image} source={{ uri: Img1 }}/> 
           <Text style={styles.vagas}> 
           Salario: R$ 2.500,00</Text>
           <Text style={styles.vagas}>Descricao: Ter conhecimento em Java, C++ e experiencia de 2 anos na area de desenvolvimento. Ser autodidata e proativo. Ser Capaz de trabalhar em 
          conjunto com equipe.
          </Text>
          <Text style={styles.vagas}>Contato: Luciana - (13) 98181-8181
          </Text>
      </View>

      <View style={styles.container}>
           <Text style={styles.titulovagas} >Front-end Estágio</Text>
           <Image style={styles.image} source={{ uri: Img2 }}/> 
           <Text style={styles.vagas}> 
           Salario: R$ 1.500,00</Text>
           <Text style={styles.vagas}>Descricao: Ter conhecimento em HTML, CSS e JavaScript. Não precisa de experiencia na área. Ser autodidata e proativo. Ser Capaz de trabalhar em 
          conjunto com equipe.
          </Text>
          <Text style={styles.vagas}>Contato: Joseff - (13) 98181-8181
          </Text>
      </View>

      <View style={styles.container}>
           <Text style={styles.titulovagas} >Desenvolvedor Mobile</Text>
           <Image style={styles.image} source={{ uri: Img3 }}/> 
           <Text style={styles.vagas}> 
           Salario: R$ 4.500,00</Text>
           <Text style={styles.vagas}>Descricao: Ter conhecimento em React Native e experiencia de 4 anos na area de desenvolvimento. Saber Python e PHP é um diferencial. Ser Capaz de trabalhar em 
          conjunto com equipe. Vaga Home-office.
          </Text>
          <Text style={styles.vagas}>Contato: Simone - (13) 98181-8181
          </Text>
      </View>
      </ScrollView>

  )
}


export default App;
