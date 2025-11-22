import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelBtn}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signInBtn}
            onPress={() => Alert.alert("Sign In", "Signed in successfully")}
          >
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default SignIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    padding: 25,
    borderRadius: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cancelBtn: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#ea666cff",
    marginRight: 10,
  },
  cancelText: {
    textAlign: "center",
    color: "#f4f6f8ff",
    fontSize: 16,
  },
  signInBtn: {
    flex: 1,
    padding: 12,
    backgroundColor: "#1474daff",
    borderRadius: 8,
    marginLeft: 10,
  },
  signInText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
