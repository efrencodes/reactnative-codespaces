import React, { useState } from 'react'
import { View, Text, Button, TextField } from 'react-native-ui-lib'
import { router } from 'expo-router'

export default function Login() {
	return (
		<View flex paddingH-25 paddingT-120>
			<View marginT-100 center>
				<Text>Ingresa tu numero celular, te enviaremos un codigo de verificación</Text>
				<TextField keyboardType="phone-pad" placeholder="(123) 456-7890" maxLength={10} />
				<Button
					text70
					white
					background-orange30
					label="Ingresar"
					onPress={() => router.push('/(tabs)/index')}
				/>
			</View>
		</View>
	)
}
