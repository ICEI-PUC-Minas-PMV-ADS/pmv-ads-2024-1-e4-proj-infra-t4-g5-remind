import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input({
  type = 'default',
  width = '52',
  max,
  min,
  required,
  name,
  disabled,
  error,
  ...props
}) {
  return (
    <TextInput
      {...props}
      editable={!disabled}
      keyboardType={type}
      maxLength={max}
      minLength={min}
      style={[
        styles.input,
        { width: width },
        error ? styles.error : null,
        disabled ? styles.disabled : null,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
  error: {
    borderColor: 'red',
  },
  disabled: {
    backgroundColor: 'lightgray',
  },
});