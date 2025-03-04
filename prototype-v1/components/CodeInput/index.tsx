import React, { useState } from 'react'
import { Text } from 'react-native-ui-lib'
import { Platform, SafeAreaView, StyleSheet } from 'react-native'

import {
	CodeField,
	Cursor,
	useBlurOnFulfill,
	useClearByFocusCell,
} from 'react-native-confirmation-code-field'

const CELL_COUNT = 4

const styles = StyleSheet.create({
	root: { flex: 1, padding: 20 },
	title: { textAlign: 'center', fontSize: 30 },
	codeFieldRoot: { marginTop: 20 },
	cell: {
		width: 40,
		height: 40,
		lineHeight: 38,
		fontSize: 24,
		borderWidth: 2,
		borderColor: '#00000030',
		textAlign: 'center',
		marginLeft: 10,
	},
	focusCell: {
		borderColor: '#000',
	},
})

const CodeInput = () => {
	const [value, setValue] = useState('')
	const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value,
		setValue,
	})

	return (
		<SafeAreaView>
			<CodeField
				ref={ref}
				{...props}
				// Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't CodeInputear
				value={value}
				onChangeText={setValue}
				cellCount={CELL_COUNT}
				rootStyle={styles.codeFieldRoot}
				keyboardType="number-pad"
				textContentType="oneTimeCode"
				autoComplete={'sms-otp'}
				testID="my-code-input"
				renderCell={({ index, symbol, isFocused }) => (
					<Text
						key={index}
						style={[styles.cell, isFocused && styles.focusCell]}
						onLayout={getCellOnLayoutHandler(index)}
					>
						{symbol || (isFocused ? <Cursor /> : null)}
					</Text>
				)}
			/>
		</SafeAreaView>
	)
}

export default CodeInput
