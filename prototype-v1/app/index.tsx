import React from 'react'
import { View, Button } from 'react-native-ui-lib'

export default function App() {
	return (
		<View flex paddingH-25 paddingT-120>
			<View marginT-100 center>
				<Button text70 white background-orange30 label="Login" />
				<Button link text70 orange30 label="Sign Up" marginT-20 />
			</View>
		</View>
	)
}
