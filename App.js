
import { StyleSheet,View} from 'react-native';

//importando a biblioteca de icones 
import Icon from 'react-native-vector-icons/FontAwesome';

//importando os componentes
import Title_Media from './src/components/Title_media/index';
import Title_Valores from './src/components/Title_valores/index';
import Header from './src/components/Header/index';
import Title_menu from './src/components/Title_menu'

//importando o conteudo 
import Form_media from './src/content/Form_media/index';
import Form_valores from './src/content/Form_valores/index';

export default function App() {

  return (

    <View style={styles.container}>

      <Header/>
      
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <Icon name="mobile-phone" size={160} color="#900" />

      <Title_menu/>

    <Icon name="long-arrow-down" size={260} color="#900" />

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <Icon name="solution" size={60} color="#900" />
   
      <Title_Media/>

      <Form_media/>

    <br></br>
    <br></br>
    <br></br>
    <br></br>

      <Icon name="calculator" size={60} color="#900" />

      <Title_Valores/>

      <Form_valores/>

     

      </View>

  );
}

const styles = StyleSheet.create({

  Tabar:{

    color: 'black',
    position: 'row', 
    alignItems: 'center',

  },

  icones: {

    flex: 1,
    flexDirection: 'Row',
    alignItems: 'center', 

  },

  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
