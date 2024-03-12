import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function App(): React.JSX.Element {

  const [city,setCity] = useState<string>("São Paulo");
  const [humidity,setHumidity] = useState<string>("15");
  const [consition,setCondition] = useState<string>("Ensolarado");
  const [rainProbability,setRainProbability] = useState<string>("30");
  const [feelslike,setFeelslike] = useState<string>("41");
  const [temperature,setTemperature] = useState<string>("37");
  const [night,setNight] = useState<boolean>(false);

  function isNight(){
    const hour = new Date().getHours();
    console.log(hour);

    if(hour >= 18 || hour < 6){
      setNight(true)
    } else {
      setNight(false)
    }
  }

  useEffect(() => {
    const intervalid = setInterval(()=>{
      isNight();
    },6000);
  
  })
  return (
    <View style={[styles.container, night == false ? styles.containerBgDay : styles.containerBgNight]}>

      <View style={styles.header}>
        <Text style={styles.city}>{city}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.temperature}>{temperature}°C</Text>
        <Image style={styles.weatherIcon} source={require('./src/assets/images/icon3.png')} />
      </View>

      <View>
        <Text style={styles.weatherCondition}>{consition}</Text>
        <Text style={styles.text}>Sensação Térmica: {feelslike} °C</Text>
        <Text style={styles.text}>Probabilidade de Chuva: {rainProbability}%</Text>
        <Text style={styles.text}>Umidade: {humidity}%</Text>
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

  containerBgDay:{
    backgroundColor: '#09d3f3'
  },
  containerBgNight:{
    backgroundColor: '#333'
  },

});
export default App;