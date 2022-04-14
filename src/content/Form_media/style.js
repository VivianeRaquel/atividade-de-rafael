import { StyleSheet } from 'react-native'


// css style 

const styles = StyleSheet.create( {

   numberResult:{ //resultado / cor e tamanho
      
      fontSize: 40,
      color: "black",
      fontWeight: "bold",
      textAlign: "center",

  },

   information:{ //informação do que e para fazer

      fontSize: 50,
      color: "black",
      fontWeight: "bold",

},

   formContext:{

      width: "100%",
      bottom: 0,
      alignItems: "center",//centralizando
      marginTop: 30,
    
   },

   form:{

      width: "100%",
      height: "auto",
      marginTop: "30",
      padding: 10,

   },

   formLabel:{ 

      color: "#000000",
      fontSize: 18,
      paddingLeft: 20,

   },

   input:{ 

      width: "90%",
      color: '#000',
      height: 40,
      margin: 12,
      paddingLeft: 10,
      backgroundColor: "#f6f6f6",
      alignItems: "center",

   },

   buttonCalculator:{

 
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      backgroundColor: "#900",
      paddingTop: 14,
      paddingBottom: 14,
      marginLeft: 12,
      marginTop: 30, 
      
   },

   textbuttonCalculator:{ //nome dentro do botão

      fontSize: 20,
      color: "#ffffff",

   },

  });

  export default styles