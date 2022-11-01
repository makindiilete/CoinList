import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppScreen} from '../../components/AppScreen';
import Carousel from '../../components/Carousel';

export function HomeScreen() {
  return (
    <AppScreen>
      <View style={styles.container}>
        <Carousel />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {display: 'flex', justifyContent: 'center', flex: 1},
});
