import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuItem from './components/restaurantDetail/MenuItem';
import RestaurantDetail from './components/restaurantDetail/RestaurantDetail';
import Rootnavigation from './navigation';
import Home from './screens/Home';

export default function App() {
  return <Rootnavigation />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
