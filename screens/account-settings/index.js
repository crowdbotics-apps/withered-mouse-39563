import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from "react";
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from "react-native";

const AccountSettingsScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [notifications, setNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [deactivateAccount, setDeactivateAccount] = useState(false);
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        
        <View style={styles.billingContainer}>
          <Pressable onPress={() => {
          navigation.navigate("termsAndConditions");
        }}><Text style={styles.billingText}>{"Terms and conditions"}</Text></Pressable>
          <View style={styles.nameInput}>
            <Pressable onPress={() => {
            navigation.navigate("privacyPolicy");
          }}><Text style={styles.inputText}>{"Privacy policy"}</Text></Pressable>
            
          </View>
          
          
        </View>
        <View style={styles.togglesContainer}>
          <View style={styles.toggle}>
            <Pressable onPress={() => {
            navigation.navigate("Untitled14");
          }}><Text style={styles.toggleText}>{"Payment history "}</Text></Pressable>
            
          </View>
          <View style={styles.toggle}>
            <Pressable onPress={() => {
            navigation.navigate("Untitled13");
          }}><Text style={styles.toggleText}>{"Billing Preferences"}</Text></Pressable>
            
          </View>
          <View style={styles.toggle}>
            <Pressable onPress={() => {
            navigation.navigate("supportSendFeedback");
          }}><Text style={styles.toggleText}>{"Support/ Send Feedback"}</Text></Pressable>
            
          </View>
          <View style={styles.toggle}>
            <Text style={styles.toggleText}>{"Log out"}</Text>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  billingContainer: {
    flex: 0.5,
    paddingHorizontal: 20 // borderWidth: 1,
    // borderColor: '#979797',

  },
  billingText: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12,
    marginLeft: 20
  },
  inputText: {
    fontSize: 16,
    marginLeft: 20
  },
  togglesContainer: {
    flex: 0.3,
    paddingHorizontal: 20
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  toggleText: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12,
    marginLeft: 20
  }
});
export default AccountSettingsScreen;