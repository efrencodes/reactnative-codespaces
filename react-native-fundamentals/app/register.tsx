import React, { useState } from "react"
import { router } from "expo-router"
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from "react-native"

export default function RegisterPage() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const onCancelButton = () => {
        router.push('/')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Register page</Text>
            <TextInput
                onChangeText={setUserName}
                value={username}
                placeholder="Username"
            />
            <TextInput
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
            />
            <TextInput
                onChangeText={setPasswordConfirm}
                value={passwordConfirm}
                placeholder="Password Confirm"
                secureTextEntry={true}
            />
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => alert('Register!')}>
                <Text>Register</Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={onCancelButton}>
                <Text>Cancelar</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      rowGap: 40
    },
    text: {
      fontSize: 25,
      fontWeight: '500'
    }
  });