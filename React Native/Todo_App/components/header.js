import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 56,
    paddingLeft:50,
    backgroundColor: 'coral',
  },
  title: {
    color: '#fff',
    fontSize: 21,
    fontWeight: 'bold',
  }
});