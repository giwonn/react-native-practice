import Geolocation from 'react-native-geolocation-service';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function App() {
  const [location, setLocation] = useState();
  const [ok, setOk] = useState();
  const ask = async () => {
    const permission = await Geolocation.requestAuthorization('whenInUse');
    if (permission !== 'granted') {
      setOk(false);
    }
    const ss = Geolocation.getCurrentPosition(position => {
      console.log(position);
    });
  };
  useEffect(() => {
    ask();
  });
  return (
    // RN의 flexDirection의 default value는 column이다.
    // 웹의 기본 flexDirection은 row임.
    <View style={styles.container}>
      <StatusBar style="black" />
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  city: {
    flex: 1.2,
    justifyContent: 'center', // 위아래 중앙으로 정렬
    alignItems: 'center', // 양옆 중앙으로 정렬
  },
  cityName: {
    fontSize: 68,
    fontWeight: '500',
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  temp: {
    marginTop: 50,
    fontWeight: '600',
    fontSize: 178,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});
