import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
//import { colors } from '../Styles/colors'

const Input = ({label, password = false, onChange, value, error = null}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
            style={styles.input}
            autoFocus={true}
            value={value}
            onChangeText={onChange}
            secureTextEntry={password}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
        padding: 6,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    input: {
        borderRadius: 8,
        color: '#000',
        backgroundColor: 'red',
        borderBottomWidth: 2,
        borderBottomColor: 'violet',
        padding: 6,
        width: '100%',
        
        fontSize: 18,
    },
    text: {
        
        fontSize: 18,
        marginBottom: 6,
    },
    error: {
      fontSize: 12,
      marginBottom: 4,
      color: 'red',
    }
})
