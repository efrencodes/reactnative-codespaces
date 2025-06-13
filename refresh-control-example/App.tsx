import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const TIME_FOR_REFRESH = 2000;
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  const onRefresh = React.useCallback(() => {
    if (isAtTop) {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, TIME_FOR_REFRESH);
    }
  }, [isAtTop]);

  const handleScroll = (e: {
    nativeEvent: { contentOffset: { y: number } };
  }) => {
    setIsAtTop(e.nativeEvent.contentOffset.y <= 0);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Text>Project for test the refresh scroll</Text>
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
