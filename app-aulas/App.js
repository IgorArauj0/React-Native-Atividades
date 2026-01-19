//Arquivo Principal onde fica o componente raiz
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//Aqui são os import, ou seja, importamos aquilo que queremos utilizar

export default function App() {
  return (
    <View style={styles.container}>
    

      <View style={styles.primeiraView}>
         <Text>Conteúdo da Primeira View</Text>
         <Text>Conteúdo da Primeira View</Text>
      </View>

      <View style={styles.segundaView}>
         <Text>Conteúdo da Segunda View</Text>
         <Text>Conteúdo da Segunda View</Text>
      </View>



      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },

  primeiraView: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

   segundaView: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
});
