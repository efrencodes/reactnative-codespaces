import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { useHeaderHeight } from '@react-navigation/elements';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';

const PageCrypto = () => {
  const headerHeight = useHeaderHeight();

  const currencies = [{
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 50000
  }, {
    id: 2,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 50000
  },
  {
    id: 3,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 50000
  },{
    id: 4,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 50000
  }]


  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{ paddingTop: headerHeight }}>
      <Text style={defaultStyles.sectionHeader}>Latest Crypot</Text>
      <View style={defaultStyles.block}>
        {currencies?.map((currency: any) => (
          <Link href={`/crypto/${currency.id}`} key={currency.id} asChild>
            <TouchableOpacity style={{ flexDirection: 'row', gap: 14, alignItems: 'center' }}>
             <View style={{ flex: 1, gap: 6 }}>
                <Text style={{ fontWeight: '600', color: Colors.dark }}>{currency.name}</Text>
              </View>
              <View style={{ gap: 6, alignItems: 'flex-end' }}>
                <Text>{currency.price.toFixed(2)} €</Text>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
};
export default PageCrypto;
