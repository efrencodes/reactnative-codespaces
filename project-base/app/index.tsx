import React from 'react'
import { View, TextField, Text, Button } from 'react-native-ui-lib'
import { useBookStore } from 'store/bookStore'

export default function App() {
	const amont = useBookStore((state) => state.amount)
	return (
		<View flex paddingH-25 paddingT-120>
			<Text blue50 text20>
				Books: {amont}
			</Text>
			<TextField text50 placeholder="username" grey10 />
			<TextField text50 placeholder="password" secureTextEntry grey10 />
			<View marginT-100 center>
				<Button text70 white background-orange30 label="Login" />
				<Button link text70 orange30 label="Sign Up" marginT-20 />
			</View>
		</View>
	)
}
