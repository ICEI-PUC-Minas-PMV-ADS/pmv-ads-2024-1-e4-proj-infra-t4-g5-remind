import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalendarIcon from '../../assets/icons/CalendarIcon';

export default function CardTag({ text }) {
  return (
    <View style={styles.container}>
      <CalendarIcon />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#primary', // Substitua por sua cor primária
    backgroundColor: '#bgPrimary', // Substitua por sua cor de fundo primária
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#primary', // Substitua por sua cor primária
    marginLeft: 10,
  },
});