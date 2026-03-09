//Arquivo Principal onde fica o componente raiz
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
//Aqui são os import, ou seja, importamos aquilo que queremos utilizar
import { useState } from 'react';


//contador = guarda o valor 
// setContador = atualiza o valor
// 0 = valor inicial
export default function App() {

  const [contador, setContador] = useState(0);


  return (
    <View style={styles.container}>


      <View style={styles.primeiraView}>
        <Text>Contador:</Text>
        <Text>{contador}</Text>

        <Button title="Aumentar contador" onPress={() => setContador(contador + 1)}

        />
      </View>

      <View style={styles.segundaView}>
        <Text>Testando</Text>
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
