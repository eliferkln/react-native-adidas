import { StyleSheet, Text, View, ScrollView } from "react-native";
import BottomMenu from "../components/BottomMenu";
import Card from "../components/Card";
import Navbar from "../components/Nabar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <ScrollView style={styles.wrapper}>
        <View style={styles.container}>
          <Card />
        </View>
      </ScrollView>
      <BottomMenu />
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
