import React from 'react'
import { View, Button } from 'react-native-ui-lib'
import { router } from 'expo-router'

export default function Index() {
	return (
		<View flex paddingH-25 paddingT-120>
			<View marginT-100 center>
				<Button
					text70
					white
					background-orange30
					label="Login"
					onPress={() => router.push('/login')}
				/>
				<Button
					link
					text70
					orange30
					label="Sign Up"
					marginT-20
					onPress={() => router.push('/register')}
				/>
			</View>
		</View>
	)
}
