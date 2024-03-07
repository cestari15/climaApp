import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.city}>Presidente Epitácio</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.temperature}>55°C</Text>
        <Image style={styles.weatherIcon} source={require('./src/assets/images/icon3.png')} />
      </View>

      <View>
        <Text style={styles.weatherCondition}>Nublado</Text>
        <Text style={styles.text}>Sensação Térmica: 179 °C</Text>
        <Text style={styles.text}>Probabilidade de Chuva: 78%</Text>
        <Text style={styles.text}>Umidade: 99%</Text>
      </View>
      <Image source={require('./src/assets/images/cidade.png')}  style={styles.bottomImage}/>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomImage: {
    width: '115%',
    position: 'absolute',
    bottom: 0,
    resizeMode: 'cover',
    height: '57%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  city: {
    fontWeight: 'bold',
   color: '#FFF',
   fontSize: 25,

  },
  weatherIcon: {
    width: 100,
    height:100,
    alignSelf: 'flex-end',
    marginBottom: 20,
    flexDirection: 'row',
  },
  detailsContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',

  },
  weatherCondition: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: '#FFF'
  },
  temperature: {
    fontSize: 55,
    marginBottom: 20,
    color: 'white',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#09D3F3'
  },
  text: {
    fontSize: 17,
    color: '#FFF',
    marginBottom: 10,
    fontStyle:'italic',
  },

});
export default App;