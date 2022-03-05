import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

export function TextButton(props: TextInputProps) {
  return (
    <TextInput placeholderTextColor="#fff" style={styles.input} {...props} />
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderColor: '#40E0D0',
    paddingHorizontal: 8,
    color: '#000',
    borderWidth: 2,
    width: '100%',
    height: 40,
    marginBottom: 16,
    fontSize: 20,
    fontWeight: 'bold'
  },
});