import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router'

export default function TabLayout() {
	return (
		<Tabs>
			<Tabs.Screen
				name="home"
				options={{
					title: 'Inicio',
					headerShown: false,
					animation: 'fade',
					tabBarBadge: 1,
					tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="sales"
				options={{
					title: 'Compras',
					headerShown: false,
					animation: 'fade',
					tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="services"
				options={{
					title: 'Servicios',
					headerShown: false,
					animation: 'fade',
					tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="profi"
				options={{
					title: 'Perfil',
					headerShown: false,
					animation: 'fade',
					tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
				}}
			/>
		</Tabs>
	)
}
