import { Text, View } from 'react-native'
import  React from 'react'
import styles from './style'; //exportando css style 

export default function Title_menu() {
    
    //aqui fica o titulo dos forms

    return (
      
      <View style={styles.boxTitle}>

        <Text style={styles.textTitle}>Atividade Avaliativa</Text>

        <Text style={styles.textMenu}>Atividade solicitada pelo professor rafael. 
          <br></br>     diciplina: Desenvolvimento Mobile.
        </Text>
       
      </View>

    );
  }