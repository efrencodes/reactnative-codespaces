import { Stack, useLocalSearchParams } from 'expo-router';

const PageCryptoId = () => {
  const { id } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ title: String(id) }} />
    </>
  );
};

export default PageCryptoId;