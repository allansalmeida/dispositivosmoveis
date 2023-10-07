import { View, Text, ScrollView, Image} from 'react-native'
import {styles} from './styles'

function App(){
  let Img1 = 'https://m.media-amazon.com/images/I/51vLIXjlTvL.__AC_SX300_SY300_QL70_ML2_.jpg';
  let Img2 = 'https://m.media-amazon.com/images/I/51WLQOhXRoL.__AC_SX300_SY300_QL70_ML2_.jpg';
  let Img3 = 'https://m.media-amazon.com/images/I/51lKinNmLZL.__AC_SX300_SY300_QL70_ML2_.jpg';

  return(
      <View>
      <Text style={styles.titulo}> Anúncios </Text>
       
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

        
        <View style={styles.container}>
           <Text style={styles.titulovagas} >Samsung Book </Text>
           <Image style={styles.image} source={{ uri: Img1 }}/> 
           <Text style={styles.vagas}> 
           R$: R$ 2.649,90</Text>
           <Text style={styles.vagas}>
           Descricao: Windows 11 Home, 8GB, 256GB SSD, Intel Iris Xe, 15.6'' Full HD LED, NP550XDA-KH2BR.
          
          </Text>
          <Text style={styles.vagas}>
          </Text>
      </View>

      <View style={styles.container}>
           <Text style={styles.titulovagas} >Notebook Samsung Galaxy Book Go</Text>
           <Image style={styles.image} source={{ uri: Img2 }}/> 
           <Text style={styles.vagas}> 
            R$ 1.699,90</Text>
           <Text style={styles.vagas}>Descricao: Windows 11 Home, 4GB, 128GB UFS, 14'' Full HD LED, 1.38kg.
          </Text>
          <Text style={styles.vagas}>
          </Text>
      </View>

      <View style={styles.container}>
           <Text style={styles.titulovagas} >Notebook Asus</Text>
           <Image style={styles.image} source={{ uri: Img3 }}/> 
           <Text style={styles.vagas}> 
           R$: R$ 1.749,00</Text>
           <Text style={styles.vagas}>Descricao: ELERON DUAL CORE / 4 GB / 128 GB/Windows 11 Pro/Star black.
          </Text>
          <Text style={styles.vagas}>
          </Text>
      </View>
      </ScrollView>
      </View>

  )
}


export default App;