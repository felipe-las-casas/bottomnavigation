import { View, Text, StyleSheet } from "react-native";

export default function New() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>New</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold'
    }
  });