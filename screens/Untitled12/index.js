import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled12 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <Pressable onPress={() => {
      navigation.navigate("Payments");
    }}><ScrollView contentContainerStyle={{
        backgroundColor: '#f0f0f1',
        padding: 10,
        position: 'relative',
        flex: 1
      }}></ScrollView></Pressable>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  }
});
export default Untitled12;