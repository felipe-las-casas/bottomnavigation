import { View, Text, StyleSheet } from "react-native";

export default function Feed() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Feed</Text>
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