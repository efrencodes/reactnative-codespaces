import { StyleSheet, Text, View } from 'react-native'

export default function Tab() {
	return (
		<View style={styles.container}>
			<Text>transacciones</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
