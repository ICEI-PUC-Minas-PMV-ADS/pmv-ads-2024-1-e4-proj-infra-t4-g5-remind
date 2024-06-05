// Input.js

import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ style, ...props }) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
});

export default Input;