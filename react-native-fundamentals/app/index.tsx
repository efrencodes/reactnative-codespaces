import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import ViewComponent from "@/components/viewComponent";

export default function Page() {
  return (
    <View style={styles.container}>
      <ViewComponent />
      <Link href="/home">Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    rowGap: 30
  }
});
